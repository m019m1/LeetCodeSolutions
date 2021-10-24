/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let values1 = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  },
  values2 = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  return String(num).split("").reverse().map((item, i) => {
    let number = item * Math.pow(10, i);
    if(number in values1) return values1[number];
    else if(number/Math.pow(10, i) < 5) return values2[Math.pow(10, i)].repeat(number/Math.pow(10, i));
    else return values2[5*Math.pow(10, i)] + values2[Math.pow(10, i)].repeat(number/Math.pow(10, i) - 5);
  }).reverse().join('');
};

console.log(intToRoman(1986));
console.log(intToRoman(10));
console.log(intToRoman(21));
