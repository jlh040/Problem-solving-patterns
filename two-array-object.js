function twoArrayObject(keyArr, valueArr) {
  const output = {};

  for (let i = 0; i < keyArr.length; i++) {
    if (valueArr[i] === undefined) {
      output[keyArr[i]] = null;
    } else {
      output[keyArr[i]] = valueArr[i];
    }
  }

  return output;
}
