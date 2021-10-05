/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = "",
    y = String(x);
  if (String(x).slice(0, 1) == "-") {
    sign = String(x).slice(0, 1);
    y = String(x).slice(1);
  }
  let res = sign + y.split("").reverse().join("");
  res = res.slice(0, 1) == 0 ? res.slice(1) : res;
  res = +res;
  res = res <= Math.pow(2, 31) - 1 && res >= -Math.pow(2, 31) ? res : 0;
  return res;
};

const a = Date.now();
console.log(Math.pow(2, 31) - 1);
console.log(reverse(-123456780));
console.log(reverse(-12345678999));
console.log(reverse(123));
// console.log(Date.now() - a);
