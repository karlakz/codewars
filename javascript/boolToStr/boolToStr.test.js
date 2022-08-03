const boolToWord = require("../boolToStr");

test("Convert Boolean To String", () => {
  expect(boolToWord(true)).toBe("Yes");
});

test("Convert Boolean To String", () => {
  expect(boolToWord(false)).toBe("No");
});
