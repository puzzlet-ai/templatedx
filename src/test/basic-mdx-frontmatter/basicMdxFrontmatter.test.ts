import { getInput, getOutput, print } from "../helpers";
import { expect, test } from 'vitest'
import { parse, stringify } from "../../index";

test('input matches output', () => {
  const input = getInput(__dirname);
  const tree = parse(input);
  expect(print(tree)).toMatchFileSnapshot('./node.json');
  const output = getOutput(__dirname);
  expect(stringify(tree)).toEqual(output);
});