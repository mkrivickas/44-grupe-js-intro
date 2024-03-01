console.clear();
/*
TERNARY

klausimas ? teigiama reikšmė : neigiama reikšmė;

*/

const leidimas = 10 >= 18 ? 'pilnametis' : 'nepilnametis';
console.log(leidimas);

let approve = '';

if(10 >= 18){
    approve = 'pilnametis';
} else {
    approve = 'nepilnametis';
}

console.log(approve);

// const a = 1 ? 2 : 3;
const a = 1 
            ? 2
            : 3;
console.log(a);

// const b = 1 ? 2 : 3 ? 4 : 5;
const b = 1 
            ? 2 
            : 3 
                ? 4 
                : 5;
console.log(b);

// const c = 1 < 2 ? 3 ? 4 : 5 : 6;
const c = 1 < 2 
                ? 3 
                    ? 4 
                    : 5 
                : 6;
console.log(c);

// const d = 1 > 2 ? 3 : 4 ? 5 : 6;
const d = 1 > 2 
                ? 3 
                : 4 
                    ? 5 
                    : 6;
console.log(d);

// const e = 1 < 2 ? 3 ? 4 : 5 : 6 ? 7 : 8;
const e = 1 < 2 
                ? 3
                    ? 4 
                    : 5 
                : 6 
                    ? 7 
                    : 8;
console.log(e);


// true -> [1], false -> [2]

const masyvas = [];

if (true){
    masyvas.push(1);
} else {
    masyvas.push(2);
}

const mas = true ? [1] : [2]