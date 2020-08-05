/* eslint-disable no-undef */
const push = require("./push");

describe("push function", () => {
  let array;
  beforeEach(() => (array = [1, 2, 4]));

  test("is defined", () => {
    expect(push).toBeDefined();
  });

  test("adds to the end of the array", () => {
    expect(push(array, 8)).toEqual([1, 2, 4, 8]);
  });
  test("adds any value", () => {
    expect(push(array, "hello")).toEqual([1, 2, 4, "hello"]);
    expect(push(array, 96)).toContain(96);
  });
});
