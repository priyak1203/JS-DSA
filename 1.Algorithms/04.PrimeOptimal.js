// Optimized Prime Number

// Optimized Primality Test

// Integers larger than the square root do not need to be checked
// because whenever "n = a * b" , one of the two factors "a" and "b"
// is less than or equal to the square root of "n"

// n = 24  a = 4 and b = 6
// sqrt(24) = 4.89  and 4 < 4.89

// n = 35  a = 5 and b = 7
// sqrt(35) = 5.91,  5 < 5.91

// Thus if a number is composite, you will find a divisor less than
// or equal to the square root of that number

function isPrimeOptimal(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeOptimal(1)); // false
console.log(isPrimeOptimal(5)); // true
console.log(isPrimeOptimal(4)); // false
console.log(isPrimeOptimal(13)); // true

// Big O
// O(sqrt(n))
