import { getInput, getOutput } from "../helpers";
import { expect, test } from 'vitest'
import { stringify, bundle, transformTree } from "../../index";
import { ContentLoader } from "../../index";
import fs from 'fs';

const props = {
  arr: [1, 2, 3],
  query: 'how much does puzzlet cost?',
  queryAnswer: 49,
  nestedArr: [{ num: 1, deep: { name: 'a' } }, { num: 2, deep: { name: 'b' } }, { num: 3, deep: { name: 'c' } }]
};

test('maps over arrays', async () => {
  const input = getInput(__dirname);
  const loader: ContentLoader = async path => fs.readFileSync(path, 'utf-8');
  const tree = await bundle(input, __dirname, loader);
  const processed = await transformTree(tree, props);
  const compiled = stringify(processed);
  const output = getOutput(__dirname);
  expect(compiled).toEqual(output);
});