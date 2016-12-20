function solve(input) {
  return input.split('\n')
    .map((triangle) =>
      triangle.split(' ')
        .filter((side) => side !== '')
          .map((side) => parseInt(side))
        .sort((a, b) => a - b))
    .reduce((valid, sides) => sides[2] < sides[0] + sides[1] ? valid + 1 : valid, 0);
}

module.exports = solve;