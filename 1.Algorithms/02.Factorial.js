// Factorial of a number

// Problem : Given an integer 'n', find the factorial of that integer

// Factorial of a non-negetive integer 'n', denoted n!, is the product of all
// positive integers less than or equal to 'n'.

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Big O
// O(n) - Linear
