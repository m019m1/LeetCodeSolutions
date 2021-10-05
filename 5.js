/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // fill in the table with first values (only one letter)
  let table = [];
  let res;
  for (i = 0; i < s.length; i++) {
    table[i] = [];
    table[i][i] = 1;
  }
  res = s[0];
  for (l = 2; l <= s.length; l++) {
    for (i = 0; i <= s.length - l; i++) {
      let j = i + l - 1;
      if ((i + 1 > j - 1 || table[i + 1][j - 1]) && s[i] == s[j]) {
        table[i][j] = 1;
        res = s.slice(i, j + 1);
      }
    }
  }
  return res;
};

const a = Date.now();
console.log(
  longestPalindrome(
    "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"
  )
);
console.log(Date.now() - a);
console.log(longestPalindrome("a"));
