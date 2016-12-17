/*
 Disc #1 has 17 positions; at time=0, it is at position 15.
 Disc #2 has 3 positions; at time=0, it is at position 2.
 Disc #3 has 19 positions; at time=0, it is at position 4.
 Disc #4 has 13 positions; at time=0, it is at position 2.
 Disc #5 has 7 positions; at time=0, it is at position 2.
 Disc #6 has 5 positions; at time=0, it is at position 0.
 */

const part1positions = [ 17, 3, 19, 13, 7, 5];
const part1locations = [ 15, 2, 4, 2, 2, 0];
const part2positions = [ 17, 3, 19, 13, 7, 5, 11];
const part2locations = [ 15, 2, 4, 2, 2, 0, 0];

function parseDiscs(positions, locations) {
    return positions.map((pos, i) => {
        const diff = pos - locations[i] - (i + 1);
        return { pad: diff >= 0 ? diff : pos + diff, factor: pos };
    }).sort((a, b) => b.factor - a.factor); //sort by the biggest factor desc
}

function satisfied(discs, t) {
    return !discs.some(disc => (t - disc.pad) % disc.factor !== 0)
}

function solve(positions, locations) {
    const discs = parseDiscs(positions, locations);
    let t = discs[0].pad; //starting point
    while (!satisfied(discs, t)) {
        t += discs[0].factor;
    }
    return t;
}

const sol1 = solve(part1positions, part1locations);
const sol2 = solve(part2positions, part2locations);
console.log('sol1:', sol1, 'sol2:', sol2);

//BRUTE FORCE WAY!
// function projectedLocations(t, locations, positions) {
//     return locations.map((loc, i) => (t + i + 1 + locations[i]) % positions[i]);
// }
// function isNotAllZeros(a) {
//     return a.some(e => e !== 0);
// }
//
// let t1 = 0;
// while (isNotAllZeros(projectedLocations(t1, part1locations, part1positions))) {
//     t1++;
// }
// console.log('part 1:', t1);
//
// let t2 = 0;
// while (isNotAllZeros(projectedLocations(t2, part2locations, part2positions))) {
//     t2++;
// }
// console.log('part 2:', t2);