// Link to the task
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
const countBy = function (x, n) {
  let z = [];
  for (let i = x; i <= x * n; i = i + x) {
    z.push(i);
  }
  return z;
};

// console.log(countBy(2, 5));
// console.log(countBy(1, 10));
console.log(countBy(3, 8));

// Best practice
// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

// What I learned:
// - To avoid an infinite loop, in statement 3 of the for loop, we must assign a value by which we want to increase. For example: i = i + 15;
