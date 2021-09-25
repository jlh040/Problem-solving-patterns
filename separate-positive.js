function separatePositive(arr) {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] < 0) {
      if (arr[right] > 0) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right++;
      } else {
        right++;
      }
    } else {
      left++;
      right++;
    }
  }

  return arr;
}
