function fib(n, prevValues = []) {
  if (prevValues[n]) return prevValues[n];

  let results;

  if (n < 2) {
    results = 1;
  } else {
    results = fib(n-1, prevValues) + fib(n-2, prevValues);
  }

  prevValues[n] = results;

  return results;
}

console.log(fib(10));