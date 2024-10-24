import { getInput, getOutput } from "../helpers";
import { expect, test } from 'vitest'
import { parseMDX, PluginHandler, stringifyMDX, registerPlugin, transformTree } from "../../index";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const FetchData: PluginHandler = async (_props, children, pluginAPI) => {
  await delay(10);
  const { nodeAPI, contextAPI } = pluginAPI;
  contextAPI.addContextProp('data', 42);
  const processedChildren = await Promise.all(
    children.map(async (child) => await nodeAPI.transformNode(child))
  );

  return processedChildren.flat();
};

registerPlugin('FetchData', FetchData);

test('async plugins should work', async () => {
  const input = getInput(__dirname);
  const tree = parseMDX(input);
  const processed = await transformTree(tree);
  const compiled = stringifyMDX(processed);
  const output = getOutput(__dirname);
  expect(compiled).toEqual(output);
});