/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  p = getpatternArray(p);

  // fill the table
  let table = [];
  for (j = 0; j <= p.length; j++) {
    table[j] = [];
    for (i = 0; i <= s.length; i++) {
      table[j][i] = false;
    }
  }
  table[0][0] = true;
  for (j = 0; j < p.length; j++) {
    let firstClassLength = 0;
    for(k = 0; k <= j; k++) {
      if(p[k][0] == 1) {
        firstClassLength++;
      }
    }
    
    for (i = 0; i < s.length; i++) {
      if (!table[j][i]) {
        continue;
      }
      if(firstClassLength > i + 1) {
        table[j][i] = false;
        continue;
      }
      if (table[j][i]) {
        // console.log(j + "-" + i);
      }
      let compare = s[i] == p[j][1] || p[j][1] == ".";
      let comparePrevious = false;
      if(p[j - 1]) {
        comparePrevious = s[i] == p[j - 1][1] || p[j - 1][1] == ".";
      }
      if (j == p.length - 1 && i == s.length - 1 && (compare || (p[j][0] == 2 && table[j - 1][i] && comparePrevious))) {
        // console.log(p[j][0] == 2);
        return true;
      }

      if (p[j][0] == 1 && compare) {
        table[j + 1][i + 1] = true;
        if (p[j + 1] && p[j + 1][0] == 2) {
          table[j + 1][i] = true;
        }
      } else if (p[j][0] == 2) {
        table[j + 1][i] = true;
        if (compare) {
          table[j][i + 1] = true;
          table[j + 1][i + 1] = true;
        }
      }
    }
  }
  return false;
};

// making pattern array with power degree (flag)
function getpatternArray(p) {
  let patternArray = [],  flag = 1;
  let pArr = p.split("").reverse();
  pArr.forEach((item) => {
    if (item == "*") {
      flag = 2;
    } else {
      patternArray.unshift([flag, item]);
      if (flag == 1) {
        
      }
      flag = 1;
    }
  });
  return patternArray;
}

let s = "aabbcaaaababacaccba";
let p = ".*bc*.*b*b*a*.bc*";
s = "aabbcaaaababacaccba";
p = ".*bc*.*b*b*a*.bc*a";
console.log(isMatch(s, p));
