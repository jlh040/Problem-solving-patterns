function constructNote(message, letters) {
  const messageFreqObj = {};
  const lettersFreqObj = {};

  for (let char of message) {
    messageFreqObj[char] = messageFreqObj[char] + 1 || 1;
  }
  for (let char of letters) {
    lettersFreqObj[char] = lettersFreqObj[char] + 1 || 1;
  }

  for (let char in messageFreqObj) {
    if (lettersFreqObj[char] >= messageFreqObj[char]) {
      null;
    } else {
      return false;
    }
  }

  return true;
}
