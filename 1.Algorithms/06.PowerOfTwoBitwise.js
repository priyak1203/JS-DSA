// Power of 2 - Optimized

// The number 'n' is a power of two if the bitwise AND  'n' and 'n-1' is equal to 0

function isPowerofTwoBitwise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerofTwoBitwise(1)); // true
console.log(isPowerofTwoBitwise(2)); // true
console.log(isPowerofTwoBitwise(5)); // false
console.log(isPowerofTwoBitwise(16)); // true

// Big O
// O(1) - Constant
