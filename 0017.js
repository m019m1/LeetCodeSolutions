/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
   if(!digits) {
     return [];
   }
    let letters = [,,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    d = String(digits).split('');
    let res = d.reduce((prev, item) => {
      const l = letters[item].split('');
      let arr = [];
      for(prevComb of prev) {
        for(letter of l) {
          arr.push(prevComb + letter);
        }
      }
      return arr;
    }, ['']);
    return res;
};

console.log(letterCombinations());