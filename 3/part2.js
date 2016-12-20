function solve(input) {
  const inputLines = input.split('\n').map((triangle) =>
    triangle.split(' ')
      .filter((side) => side !== '')
      .map((side) => parseInt(side)));

  const newInput = [];
  for (let i = 0; i < inputLines.length; i += 3) {
    newInput.push([inputLines[i][0], inputLines[i+1][0], inputLines[i+2][0]]);
    newInput.push([inputLines[i][1], inputLines[i+1][1], inputLines[i+2][1]]);
    newInput.push([inputLines[i][2], inputLines[i+1][2], inputLines[i+2][2]]);
  }

  return newInput.map(line => line.sort((a, b) => a - b))
    .reduce((valid, sides) => sides[2] < sides[0] + sides[1] ? valid + 1 : valid, 0);
}

module.exports = solve;