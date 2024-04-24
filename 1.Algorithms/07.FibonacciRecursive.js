// Fibonacci Sequence - Recursive Solution

// Problem : Given a number 'n', find the nth element of the Fibonacci Sequence

// Fibonacci Sequence - Sequence in which each number is the sum of the two preceding ones.
// First two numbers in the sequence are 0 and 1
// 0, 1, 1, 2, 3, 5, 8, 13, 21

// F(n) = F(n-1) + F(n-2)
// F(0) = 0, F(1) = 1

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Big O
// O(2^n)
