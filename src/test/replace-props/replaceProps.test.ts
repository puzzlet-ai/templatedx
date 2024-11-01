import { getInput, getOutput } from "../helpers";
import { expect, test } from 'vitest'
import { stringifyMDX, parseMDX, transformTree } from "../../index";

const props = {
  name1: 'Steve',
  company1: 'Toyota',
  address1: {
    street: "2 blueberry lane",
    city: "boston"
  },
  name2: 'Bob',
  company2: 'HubSpot',
  address2: {
    street: "1 blueberry lane",
    city: "nyc"
  }
};

test('replaces props', async () => {
  const input = getInput(__dirname);
  const tree = parseMDX(input);
  const processed = await transformTree(tree, props);
  const compiled = stringifyMDX(processed);
  const output = getOutput(__dirname);
  expect(compiled).toEqual(output);
});