function solve(input) {
  const directions = input.split(', ');
  let currentDir = 0; //0 = N, 1 = E, 2 = S, 3 = W
  let dupeLength = -1;
  let x = 0;
  let y = 0;
  const visits = { '0:0': true };

  directions.some((dir) => {
    currentDir = (currentDir + (dir.charAt(0) === 'R' ? 1 : -1)) % 4;
    if (currentDir === -1) {
      currentDir = 3;
    }
    let steps = parseInt(dir.substr(1));
    while (steps > 0) {
      if (currentDir % 2) {
        x += currentDir === 1 ? 1 : -1;
      } else {
        y += currentDir === 0 ? 1 : -1;
      }
      if (visitCheck(x, y)) {
        break;
      }
      steps--;
    }
    return dupeLength >= 0;
  });

  function visitCheck() {
    if (visits[`${x}:${y}`]) {
      dupeLength = Math.abs(x) + Math.abs(y);
      return true;
    }
    visits[`${x}:${y}`] = true;
    return false;
  }

  return dupeLength;
}

module.exports = solve;