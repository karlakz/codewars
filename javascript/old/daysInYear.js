// Link to the task
// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
const yearDays = (year) => {
  // return year % 4 === 0 ? `${year} has 366 days` : `${year} has 365 days`;
  return `${year} has 36${year % 4 === 0 ? "6" : "5"} days`;
};

// console.log(yearDays(1974));
// console.log(yearDays(0));
// console.log(yearDays(-64));

module.exports = yearDays;
