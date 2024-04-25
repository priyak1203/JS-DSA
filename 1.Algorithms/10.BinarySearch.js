// Binary Search - Algorithm

// Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
// Return -1 if the target element is not found.

// Works on only a Sorted Array.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[midIndex]) {
      return midIndex;
    }

    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big O
// O(log n) - Logarithmic
