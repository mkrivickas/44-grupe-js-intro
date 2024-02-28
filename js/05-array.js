console.clear();

/*
ARRAY - sąrašas, matrica, masyvas.

Masyvas prasideda index = 0;

*/

const empty = [];
console.log(empty);

//                 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai)

// stengtis vengti tokio atvejo
const random = [1, 'antras', 3, '4', 3.14, 'asdasd'];

//                  0          1        2       3
const vardai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(vardai);

const vardas1 = vardai[0];
console.log(vardas1);

const vardas2 = vardai[1];
console.log(vardas2);

console.log('----------------------')
console.log(vardai[0])
console.log(vardai[1])
console.log(vardai[2])
console.log(vardai[3])
console.log(vardai[4])
console.log(vardai[1000000])
console.log(vardai[-1])
console.log(vardai[1.5])
console.log(vardai[0, 1, 2, 3]) // 'Ona'
console.log(vardai[3, 2, 1, 0]) // 'Petras'

console.log('----------------------')

//              0  1  2  3  4
const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks['vienas']);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

function average(marks) {
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];

    return sum / marks.length;
}

console.log('Vidurkis 1:', marks1, '=', average(marks1));
console.log('Vidurkis 2:', marks2, '=', average(marks2));
console.log('Vidurkis 3:', marks3, '=', average(marks3));