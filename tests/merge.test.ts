import { merge } from "../src/merge";

test("basic merge", () => {
  const c1 = [1, 3, 5];
  const c2 = [2, 4, 6];
  const c3 = [9, 7, 0]; // descending

  const result = merge(c1, c2, c3);

  expect(result).toEqual([0,1,2,3,4,5,6,7,9]);
});