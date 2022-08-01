// Link to the task:
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
const quarterOf = (month) => {
  // Your code here
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// Best practice
// const quarterOf = m => Math.ceil(m/3);

// What I learned:
// - The Math.ceil() function always rounds a number up to the next largest integer.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

console.log(quarterOf(2));
console.log(quarterOf(5));
console.log(quarterOf(9));
console.log(quarterOf(12));
