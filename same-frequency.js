function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();
  const num1StringFreqObj = {};
  const num2StringFreqObj = {};

  if (num1String.length !== num2String.length) return false;

  for (let char of num1String) {
    num1StringFreqObj[char] = num1StringFreqObj[char] + 1 || 1;
  }
  for (let char of num2String) {
    num2StringFreqObj[char] = num2StringFreqObj[char] + 1 || 1;
  }

  for (let char in num1StringFreqObj) {
    if (!num2StringFreqObj[char]) {
      return false;
    } else if (num1StringFreqObj[char] !== num2StringFreqObj[char]) {
      return false;
    }
  }

  return true;
}
