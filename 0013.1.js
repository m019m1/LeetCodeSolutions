/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  s = s.split("");
  for (i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] == "V") {
          res += 4;
          i++;
          continue;
        } else if (s[i + 1] == "X") {
          res += 9;
          i++;
          continue;
        } else {
          res += 1;
        }
        break;
      case "V":
        res += 5;
        break;
      case "X":
        if (s[i + 1] == "L") {
          res += 40;
          i++;
          continue;
        } else if (s[i + 1] == "C") {
          res += 90;
          i++;
          continue;
        } else {
          res += 10;
        }
        break;
      case "L":
        res += 50;
        break;
      case "C":
        if (s[i + 1] == "D") {
          res += 400;
          i++;
          continue;
        } else if (s[i + 1] == "M") {
          res += 900;
          i++;
          continue;
        } else {
          res += 100;
        }
        break;
      case "D":
        res += 500;
        break;
      case "M":
        res += 1000;
        break;
    }
  }
  return res;
};

console.log(romanToInt("XLVI")); // 46
console.log(romanToInt("I"));
