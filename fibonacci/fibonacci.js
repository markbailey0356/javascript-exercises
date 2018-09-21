// memoized recursive algorithm
const fibonacci = function(n) {
  if (n <= 0) return "OOPS"
  let memo = {1: 1, 2: 1};
  const $fibonacci = function(n) {
    if (n in memo) return memo[n]
    return memo[n] = $fibonacci(n-2) + $fibonacci(n-1)
  }
  return $fibonacci(n);
}

module.exports = fibonacci
