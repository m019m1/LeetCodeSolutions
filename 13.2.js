/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let values1 = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
    },
    values2 = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

  let res = 0;
  s = s.split("");
  for (i = 0; i < s.length; i++) {
    if (s[i] + s[i + 1] in values1) {
      res += values1[s[i] + s[i + 1]];
      i++;
    } else {
      res += values2[s[i]];
    }
  }
  return res;
};

console.log(romanToInt("MCMLXXXVI"));
console.log(romanToInt("I"));
