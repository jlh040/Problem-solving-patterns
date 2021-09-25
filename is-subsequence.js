function isSubsequence(str1, str2) {
  let pointer = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[pointer]) {
      pointer++;
    }
    if (pointer === str1.length) {
      return true;
    }
  }

  return false;
}
