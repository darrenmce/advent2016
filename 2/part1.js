/*
 1 2 3
 4 5 6
 7 8 9
 */
function solve(input) {
  const paths = input.split('\n');
  let startingPoint = 5;
  return paths.map((path) => {
    const number = path.split('').reduce((prev, next) => {
      if (next === 'U') { return prev > 3 ? prev - 3 : prev; }
      if (next === 'D') { return prev < 7 ? prev + 3 : prev; }
      if (next === 'R') { return prev % 3 !== 0 ? prev + 1 : prev; }
      if (next === 'L') { return prev % 3 !== 1 ? prev - 1 : prev; }
      return prev;
    }, startingPoint);
    startingPoint = number;
    return number;
  }).join('');
}

module.exports = solve;
