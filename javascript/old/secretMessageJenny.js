// Link to the task
// https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
const greet = function (name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
};

// Best practice
// function greet(name){
// return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
//   }
console.log(greet("Simon"));
console.log(greet("Johnny"));
