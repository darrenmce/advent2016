function solve(input) {
  const directions = input.split(', ');
  let currentDir = 0; //0 = N, 1 = E, 2 = S, 3 = W
  let x = 0;
  let y = 0;
  return directions.reduce((xy, dir) => {
    currentDir = (currentDir + (dir.charAt(0) === 'R' ? 1 : -1)) % 4;
    if (currentDir === -1) {
      currentDir = 3;
    }
    const steps = parseInt(dir.substr(1));
    if (currentDir % 2) {
      x += currentDir === 1 ? steps : -steps;
    } else {
      y += currentDir === 0 ? steps : -steps;
    }
    return Math.abs(x) + Math.abs(y)
  }, 0);
}

module.exports = solve;