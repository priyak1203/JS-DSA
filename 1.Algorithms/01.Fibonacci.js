// Fibonacci Sequence

// Problem : Given a number 'n', find the first 'n' elements of the fiboncci sequence

// Fibonacci Sequence - Sequence in which each number is the sum of the two preceding ones.
// First two numbers in the sequence are 0 and 1

function fiboncci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fiboncci(2)); // [0, 1]
console.log(fiboncci(3)); // [(0, 1, 1)]
console.log(fiboncci(7)); // [(0, 1, 1, 2, 3, 5, 8)]

// Big O
// O(n) - Linear
