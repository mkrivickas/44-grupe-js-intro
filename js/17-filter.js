console.clear();

const marks = [10, 2, 12, 8, -4, 4, -7.5, 3.14, 0, 6];
console.log(marks);

const validMarks = [];

for (const mark of marks) {
  if (mark >= 1 && mark <= 10 && mark % 1 === 0) {
    validMarks.push(mark);
  }
}

for (const mark of marks) {
  if (mark < 1 || mark > 10 || mark % 1 !== 0) {
    continue;
  }
  validMarks.push(mark);
}

console.log(validMarks);
