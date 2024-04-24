// Factorial of a number - Recursive Solution

// Problem : Given an integer 'n', find the factorial of that integer

// Factorial of a non-negetive integer 'n', denoted n!, is the product of all
// positive integers less than or equal to 'n'.

// F(0) = 1
// F(4) = 4 * 3 * 2 * 1;
// F(5) = 5 * 4 * 3 * 2 * 1;
// F(n) = n * F(n-1)

// n! = n * (n-1)!

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// Big O
// O(n) - Linear
