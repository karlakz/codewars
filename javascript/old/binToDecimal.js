// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript

// REFERENCE:
// 1. split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 2. map() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 3. Number - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// 4. push() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// 5. Math.pow() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// 6. reduce() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// BEST SOLUTION:
// function binToDec(bin){
//     return parseInt(bin,2);
//   }

function binToDec(bin){
    const arrStr = bin.split('');
    const numArr = arrStr.map(Number);
    const newArr = [];
    for ( i=0; i < numArr.length; i++ ) {
        newArr.push((numArr[i] * Math.pow( 2, (numArr.length - 1 - i)))); 
    };
    const decimal = newArr.reduce((acc, curVal) => acc + curVal);
    return decimal;
};

binToDec('1001001');