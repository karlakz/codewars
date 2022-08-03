// Link to the task:
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
const countPositivesSumNegatives = function (input) {
  if (input == null || input.length === 0) return [];
  const total = [];
  total.push(input.filter((int) => int > 0).length);
  total.push(
    input.filter((int) => int < 0).reduce((acc, curInt) => acc + curInt, 0)
  );
  return total;
};

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

console.log(countPositivesSumNegatives([]));

console.log(
  countPositivesSumNegatives([
    49, 93, -19, -48, 80, 77, -24, -53, -32, -50, 55, 11, 90, 19, -60, -52, 4,
    -22, -60, 87, -83, 63, -6, 79, -45, -21, 8, -6, -97, 81, -89, 8, 64, 11, 16,
    59, 72, 5, 0, -19, -84, -15, -41, 69, -2, -32, -44, -16, 65, 17, -1, -95,
    56, 93, -68, 59, 79, -7, 62, -56, 22, 25, 47, 59, -4, 94, -99, -82,
  ])
);

console.log(countPositivesSumNegatives(null));
