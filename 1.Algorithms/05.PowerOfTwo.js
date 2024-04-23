// Power of 2

// Problem : Given a positive integer 'n', determine if the number is a power of two or not

// An integer is a power of 2 if there exists an integer 'x' such that
// n = 2^x

function isPowerofTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

console.log(isPowerofTwo(1)); // true
console.log(isPowerofTwo(2)); // true
console.log(isPowerofTwo(5)); // false
console.log(isPowerofTwo(16)); // true

// Big O
// O(log n) - Logarithmic
