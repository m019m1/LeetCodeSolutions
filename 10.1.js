/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let patternArray = getpatternArray(p);

  // make table j,i, where j - index of pattern array, i - index of string
  // (j,i) element of table is true if:
  // 1. left or top or diagonal element is true
  // and
  // 2. (j,i) compare is true
  // return the last element of table

  // fill the table with border conditions
  let table = [];
  table[-1] = [];
  table[-1][-1] = 1;
  for (j = 0; j < patternArray.length; j++) {
    table[j] = [];
    table[j][-1] = 0;
  }
  for (i = 0; i < s.length; i++) {
    table[-1][i] = 0;
  }

  for (j = 0; j < patternArray.length; j++) {
    // let flag = 0;
    // for (k = 0; k <= j; k++) {
    //   if (patternArray[k][0] == 2) {
    //     flag++;
    //   }
    // }
    let flag = 1;
    for (i = 0; i < s.length; i++) {
      table[-1][i] = 0;

      if (
        table[j - 1][i - 1] ||
        (patternArray[j][0] == 2 && table[j][i - 1]) ||
        (patternArray[j][0] == 2 &&
          patternArray[j - 1][0] != 2 &&
          table[j - 1][i])
      ) {
        if (patternArray[j][0] == 2 && flag) {
          table[j][i - 1] = true;
          flag--;
        }
        if (
          patternArray[j][1] == "." ||
          s[i] == patternArray[j][1] ||
          (i == s.length - 1 && patternArray[j][0] == 2)
        ) {
          table[j][i] = true;
        } else {
          table[j][i] = false;
        }
      } else {
        table[j][i] = false;
      }
      console.log(j + "-" + i + table[j][i]);
    }
  }
  console.log(table[1][-1]);
  return table[j - 1][i - 1];
};

// making pattern array with power degree (flag)
// 1 - 1 to 1 compare
// 2 - many identical (0,...,s.length) to 1 compare, zero always true
function getpatternArray(p) {
  let patternArray = [],
    flag = 1;
  let pArr = p.split("").reverse();
  pArr.forEach((item) => {
    if (item == "*") {
      flag = 2;
    } else {
      patternArray.unshift([flag, item]);
      flag = 1;
    }
  });
  return patternArray;
}

let s = "a";
let p = "ab*a";
console.log(isMatch(s, p));
