/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  memo = {};
  function check(i,j) {
    if(!memo[i,j]) {
      if(j == p.length) {
        return i == s.length;
      }
      let compare = i < s.length && (p[j] == s[i] || p[j] == '.');
      if(p[j+1] && p[j+1] == '*') {
        memo[i,j] = compare && check(i+1,j) || check(i,j+2);
      } else {
        memo[i,j] = compare && check(i+1,j+1);
      }
    }
    return memo[i,j];
  }
  return check(0,0);
}

let s = "aabbcaa";
let p = "a...ca.";
s = "aa";
p = "a*a";
console.log(isMatch(s, p));
