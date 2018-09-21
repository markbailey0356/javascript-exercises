// memoized recursive algorithm
const fibonacci = function(n) {
  if (n <= 0) return "OOPS"
  let memo = {1: 1, 2: 1};
  const innerFib = function(n) {
    if (n in memo) return memo[n]
    return memo[n] = innerFib(n-2) + innerFib(n-1)
  }
  return innerFib(n);
}

module.exports = fibonacci
