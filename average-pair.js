function averagePair(arr, targetAverage) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === targetAverage) {
      return true;
    } else if ((arr[left] + arr[right]) / 2 < targetAverage) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
