import { NODE_TYPES, MDX_JSX_ATTRIBUTE_TYPES } from './constants';
import { OperatorFunction } from './types';
import { ElementPluginRegistry } from './element-plugin-registry';
import { PluginContext } from './element-plugin';
import { stringifyValue } from './utils';
import {
  isMdxJsxElement,
  isMdxJsxFlowElement,
  isMdxJsxTextElement,
  isParentNode,
  createBaseProcessor,
} from './ast-utils';
import jsep from 'jsep';
import {
  MdxJsxFlowElement,
  MdxJsxTextElement,
} from 'mdast-util-mdx';
import type { ExtractedField } from './extract-fields';
import extractFieldsFromAst from './extract-fields';
import { Scope } from './scope';
import type { 
  Root,
  Node, 
  Parent, 
  RootContent,
} from 'mdast';


export const extractFields = async (
  tree: Root,
  fieldNames: string[],
  props?: Record<string, any>
): Promise<ExtractedField[]> => {
  const extractedFields: ExtractedField[] = [];
  const processed = await transformTree(tree, props || {});

  const processor = createBaseProcessor().use(extractFieldsFromAst, {
    fields: fieldNames,
    storage: extractedFields,
  });

  await processor.run(processed);

  return extractedFields;
};

const nodeTypeHelpers = {
  isMdxJsxElement,
  isMdxJsxFlowElement,
  isMdxJsxTextElement,
  isParentNode,
  NODE_TYPES,
};


export class NodeTransformer {
  private scope: Scope;

  constructor(scope: Scope) {
    this.scope = scope;
  }

  async transformNode(node: Node): Promise<Node | Node[]> {
    if (
      node.type === NODE_TYPES.MDX_TEXT_EXPRESSION ||
      node.type === NODE_TYPES.MDX_FLOW_EXPRESSION
    ) {
      return this.evaluateExpressionNode(node);
    }

    if (isMdxJsxElement(node)) {
      return await this.processMdxJsxElement(node);
    }

    if (isParentNode(node)) {
      const newNode = { ...node } as Parent;

      const processedChildren = await Promise.all(
        node.children.map(async (child) => {
          const childTransformer = new NodeTransformer(this.scope);
          const result = await childTransformer.transformNode(child);
          return Array.isArray(result) ? result : [result];
        })
      );

      newNode.children = processedChildren.flat() as RootContent[];

      return newNode;
    }

    return node;
  }

  evaluateExpressionNode(node: Node): Node {
    const expression = (node as any).value;
    try {
      const evaluatedValue = this.resolveExpression(expression);
      return {
        type: NODE_TYPES.TEXT,
        value: stringifyValue(evaluatedValue),
      } as Node;
    } catch (error: any) {
      throw new Error(
        `Error evaluating expression "${expression}": ${error.message}`
      );
    }
  }

  resolveExpression(expression: string): any {
    expression = expression.trim();
    let ast: jsep.Expression;
    try {
      ast = jsep(expression);
    } catch (e) {
      throw new Error(`Failed to parse expression: "${expression}"`);
    }
    return this.evaluateJsepExpression(ast);
  }

  evaluateJsepExpression(node: jsep.Expression): any {
    switch (node.type) {
      case 'BinaryExpression':
        return this.evaluateBinaryExpression(node as jsep.BinaryExpression);

      case 'UnaryExpression':
        return this.evaluateUnaryExpression(node as jsep.UnaryExpression);

      case 'Literal':
        return (node as jsep.Literal).value;

      case 'Identifier':
        return this.resolveVariable((node as jsep.Identifier).name);

      case 'MemberExpression':
        return this.evaluateMemberExpression(node as jsep.MemberExpression);

      case 'CallExpression':
        throw new Error(`Function calls are not supported.`);

      default:
        throw new Error(`Unsupported node type: ${node.type}`);
    }
  }

  resolveVariable(variablePath: string): any {
    if (!variablePath) {
      throw new Error(`Variable path cannot be empty.`);
    }
  
    const parts = variablePath.split('.');
    let value: any;
  
    try {
      value = this.scope.get(parts[0]);
    } catch (error) {
      throw new Error(`Variable "${parts[0]}" is not defined in the scope.`);
    }
  
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      if (value == null) {
        throw new Error(
          `Cannot access property "${part}" of null or undefined in "${variablePath}".`
        );
      }
      // Access property safely
      value = value[part];
    }
  
    return value;
  }
  

  evaluateBinaryExpression(node: jsep.BinaryExpression): any {
    const operatorFunctions: { [key: string]: OperatorFunction } = {
      '+': (left, right) => left + this.evaluateJsepExpression(right),
      '-': (left, right) => left - this.evaluateJsepExpression(right),
      '*': (left, right) => left * this.evaluateJsepExpression(right),
      '/': (left, right) => left / this.evaluateJsepExpression(right),
      '%': (left, right) => left % this.evaluateJsepExpression(right),
      '==': (left, right) => left == this.evaluateJsepExpression(right),
      '!=': (left, right) => left != this.evaluateJsepExpression(right),
      '>': (left, right) => left > this.evaluateJsepExpression(right),
      '>=': (left, right) => left >= this.evaluateJsepExpression(right),
      '<': (left, right) => left < this.evaluateJsepExpression(right),
      '<=': (left, right) => left <= this.evaluateJsepExpression(right),
      '&&': (left, right) => left && this.evaluateJsepExpression(right),
      '||': (left, right) => left || this.evaluateJsepExpression(right),
    };
    const operator = node.operator;

    const operation = operatorFunctions[operator];
    if (!operation) {
      throw new Error(`Operator "${operator}" is not allowed.`);
    }

    const left = this.evaluateJsepExpression(node.left);

    return operation(left, node.right);
  }

  evaluateUnaryExpression(node: jsep.UnaryExpression): any {
    const argument = this.evaluateJsepExpression(node.argument);
    switch (node.operator) {
      case '+':
        return +argument;
      case '-':
        return -argument;
      case '!':
        return !argument;
      default:
        throw new Error(`Unsupported operator: ${node.operator}`);
    }
  }

  evaluateMemberExpression(node: jsep.MemberExpression): any {
    const object = this.evaluateJsepExpression(node.object);
    const property = node.computed
      ? this.evaluateJsepExpression(node.property)
      : (node.property as jsep.Identifier).name;

    if (object && typeof object === 'object' && property in object) {
      return object[property];
    } else {
      throw new Error(`Property "${property}" not found.`);
    }
  }

  async processMdxJsxElement(
    node: MdxJsxFlowElement | MdxJsxTextElement
  ): Promise<Node | Node[]> {
    try {
      const elementName = node.name!;
      const plugin = ElementPluginRegistry.getPlugin(elementName);
      if (plugin) {
        const props = this.evaluateProps(node);
        const pluginContext: PluginContext = {
          createNodeTransformer: (scope: Scope) => new NodeTransformer(scope),
          scope: this.scope,
          elementName,
          nodeTypeHelpers,
        };
        const result = await plugin.transform(props, node.children, pluginContext);
        return result;
      } else {
        const newNode = { ...node } as Parent;

        const processedChildren = await Promise.all(
          node.children.map(async (child) => {
            const childTransformer = new NodeTransformer(this.scope);
            const result = await childTransformer.transformNode(child);
            return Array.isArray(result) ? result : [result];
          })
        );

        newNode.children = processedChildren.flat() as RootContent[];
        return newNode;
      }
    } catch (error) {
      throw new Error(
        `Error processing MDX JSX Element: ${(error as Error).message}`
      );
    }
  }

  evaluateProps(node: any): Record<string, any> {
    const props: Record<string, any> = {};

    for (const attr of node.attributes) {
      if (attr.type === MDX_JSX_ATTRIBUTE_TYPES.MDX_JSX_ATTRIBUTE) {
        if (attr.value === null || typeof attr.value === 'string') {
          props[attr.name] = attr.value || '';
        } else if (
          attr.value.type ===
          MDX_JSX_ATTRIBUTE_TYPES.MDX_JSX_ATTRIBUTE_VALUE_EXPRESSION
        ) {
          const expression = attr.value.value;
          props[attr.name] = this.resolveExpression(expression);
        }
      } else if (
        attr.type === MDX_JSX_ATTRIBUTE_TYPES.MDX_JSX_EXPRESSION_ATTRIBUTE
      ) {
        throw new Error(
          `Unsupported attribute type in component <${node.name}>.`
        );
      }
    }

    return props;
  }
}

export const transformTree = async (
  tree: Root,
  props: Record<string, any> = {}
): Promise<Root> => {
  const scope = new Scope({ props });
  const transformer = new NodeTransformer(scope);
  const processedTree = await transformer.transformNode(tree);
  return processedTree as Root;
};