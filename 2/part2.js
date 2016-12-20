/*
     1
   2 3 4
 5 6 7 8 9
   A B C
     D
 */

const up = {
  noop: ['5', '2', '1', '4', '9'],
  increment: {
    6: '2', A: '6', 3: '1', 7: '3', B: '7', D: 'B', 8: '4', C: '8'
  }
};
const down = {
  noop: ['5', 'A', 'D', 'C', '9'],
  increment: {
    2: '6', 6: 'A', 1: '3', '3': 7, 7: 'B', B: 'D', 4: '8', 8: 'C'
  }
};
const right = {
  noop: ['1', '4', '9', 'C', 'D'],
  increment: {
    2: '3', 3: '4', 5: '6', 6: '7', 7: '8', 8: '9', A: 'B', B: 'C'
  }
};
const left = {
  noop: ['1', '2', '5', 'A', 'D'],
  increment: {
    4: '3', 3: '2', 9: '8', 8: '7', 7: '6', 6: '5', C: 'B', B: 'A'
  }
};

const pathMaps = {
  U: up, D: down, R: right, L: left
};

function solve(input) {
  const paths = input.split('\n');
  let startingPoint = '5';
  return paths.map((path) => {
    const number = path.split('').reduce((prev, next) => {
      const pathMap = pathMaps[next];
      return pathMap.noop.indexOf(prev) < 0 ? pathMap.increment[prev] : prev;
    }, startingPoint);
    startingPoint = number;
    return number;
  }).join('');
}

module.exports = solve;
