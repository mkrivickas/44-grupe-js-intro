console.clear();

const marks = [];
console.log(marks);

marks.push(10);
marks.push(2);
marks.push(8);
console.log(marks);

marks.unshift(9);
marks.unshift(8);
marks.unshift(7);
console.log(marks);

marks.shift();
console.log(marks);

marks.pop();
console.log(marks);

console.log(marks[3]);
console.log(marks.at(3));

marks.push(5);

console.log('AT -------------------------');

const paskutinePozicija = marks.length - 1;
console.log(marks);
console.log(marks[paskutinePozicija]);
console.log(marks.at(paskutinePozicija));
console.log(marks.at(-1));
console.log(marks.at(-2));
console.log(marks.at(-3));
console.log(marks.at(-4));
console.log(marks.at(-5));

// 0   1  2
// [1, 2, 3]

console.log('INCLUDE -------------------------');

console.log(marks);
console.log(1, marks.includes(1));
console.log(2, marks.includes(2));
console.log(3, marks.includes(3));
console.log(5, marks.includes(5));
console.log(10, marks.includes(10));
console.log('labas', marks.includes('labas'));

const masyvasObjektu = [
    {a: 'a'},
    {b: 'b'},
    {c: 'c'},
];
console.log(masyvasObjektu.includes({b: 'b'}));

console.log('INDEXOF -------------------------');
marks.push(-1);
console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(9));
console.log(marks.indexOf(10));
console.log(marks.indexOf(777));
console.log(marks.indexOf(4));
console.log(marks.indexOf(-1));

console.log('JOIN -------------------------');
const visiPazymiai = marks.join();
console.log(visiPazymiai);
console.log(typeof visiPazymiai);

const visiPazymiai2 = marks.join('');
console.log(visiPazymiai2);

const visiPazymiai3 = marks.join(' -==- ');
console.log(visiPazymiai3);

console.log('REVERSE -------------------------');
const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);

skaiciai.reverse();
console.log(skaiciai);

console.log('SLICE -------------------------');
console.log(skaiciai);
console.log(skaiciai.slice(0));
console.log(skaiciai.slice(1));
console.log(skaiciai.slice(2));
console.log(skaiciai.slice(-4));
console.log(skaiciai.slice(2, 4));
console.log(skaiciai.slice(2, 5));
console.log(skaiciai.slice(2, 6));
console.log(skaiciai.slice(2, -3));
console.log(skaiciai.slice(3, -3));

console.log('SPLICE -------------------------');
console.log(skaiciai);
console.log(skaiciai.splice(2, 0, 'X'));
console.log(skaiciai);
console.log(skaiciai.splice(3, 1));
console.log(skaiciai);

console.log(skaiciai.splice(-2, 2));
console.log(skaiciai);
console.log(skaiciai.splice(0, 1, 1000000));
console.log(skaiciai);
skaiciai[0] = 10;
skaiciai[skaiciai.length - 2] = 10;
console.log(skaiciai);