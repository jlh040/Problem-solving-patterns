function merge(arr1, arr2) {
  let output = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    if (arr1[arr1Idx] <= arr2[arr2Idx]) {
      output.push(arr1[arr1Idx]);
      arr1Idx++;
    } else {
      output.push(arr2[arr2Idx]);
      arr2Idx++;
    }
  }

  while (arr1Idx < arr1.length) {
    output.push(arr1[arr1Idx]);
    arr1Idx++;
  }

  while (arr2Idx < arr2.length) {
    output.push(arr2[arr2Idx]);
    arr2Idx++;
  }

  return output;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(left, right);
}

function countPairs(arr, num) {
  let numPairs = 0;
  let sortedArr = mergeSort(arr);

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === num) {
      numPairs++;
      left++;
      right--;
    } else if (sum < num) {
      left++;
    } else {
      right--;
    }
  }

  return numPairs;
}
