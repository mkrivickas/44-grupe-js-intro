console.clear();

const x = 7;
const y = 5;

// function declaration
function sum(a, b) {
  return a + b;
}
console.log(`${x} + ${y} = ${sum(x, y)}`);

// anonymous function
const diff = function (a, b) {
  return a - b;
};
console.log(`${x} - ${y} = ${diff(x, y)}`);

// arrow function
const multi = (a, b) => {
  return a * b;
};
console.log(`${x} * ${y} = ${multi(x, y)}`);

// arrow function
// jei yra tik 1 procedūra, galima nerašyti return
const div = (a, b) => a / b;
console.log(`${x} / ${y} = ${div(x, y)}`);

// arrow function
// jei yra tik 1 parametras, galima nerašyti ()
const sqr = (a) => a * a;
console.log(`${x}^2 = ${sqr(x)}`);

console.log("----------------------");

// function firstLetter(string) {
//   return str[0];
// }

const firstLetter = (str) => str[0];
console.log("Labas", "->", firstLetter("Labas"));

// function isOld(age) {
//   if (age >= 18) {
//     return "old";
//   }
//   return "young";
// }

const isOld = (age) => (age >= 18 ? "old" : "young");
console.log(50, "->", isOld(50));
console.log(5, "->", isOld(5));

// function doIneedUmbrella(temp) {
//   if (temp > 0) {
//     return false;
//   }
//   return true;
// }

// const doIneedUmbrella = (temp) => (temp > 0 ? false : true);
// const doIneedUmbrella = (temp) => temp <= 0;
// const doIneedUmbrella = (temp) => -temp > 0;
const doIneedUmbrella = (temp) => !(temp > 0);
console.log(18, doIneedUmbrella(18));
console.log(-18, doIneedUmbrella(-18));

// same logic explained
function xxx() {
  // return 4 > 2 ? true : false;
  return 4 > 2;
}
console.log(xxx());

// tokios funkcijos perdarinėti neverta
function shouldIpush(list, number) {
  if (number % 2 === 0) {
    list.push(number);
  }
  return list;
}
console.log([], 4, "->", shouldIpush([], 4));
console.log([4], 3, "->", shouldIpush([4], 3));
console.log([10, 20], 14, "->", shouldIpush([10, 20], 14));

console.clear();

// Kalkuliatoriaus funkcija
function calc(n1, operation, n2) {
  const funcs = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => a ** b,
    ">": (a, b) => a > b,
    "<": (a, b) => a < b,
  };

  return funcs[operation](n1, n2);
}

console.log(`7 + 5 = ${calc(7, "+", 5)}`);
console.log(`7 - 5 = ${calc(7, "-", 5)}`);
console.log(`7 * 5 = ${calc(7, "*", 5)}`);
console.log(`7 / 5 = ${calc(7, "/", 5)}`);
console.log(`7 ** 5 = ${calc(7, "**", 5)}`);
console.log(`7 > 5 = ${calc(7, ">", 5)}`);
console.log(`7 < 5 = ${calc(7, "<", 5)}`);

//  grąžina pirmą raidę
//  grąžina paskutinę raidę
//  grąžina vidurinę raidę
//  grąžina teksto ilgį

// aboutStr('labas', 'first')
// aboutStr('labas', 'last')
// aboutStr('labas', 'mid')
// aboutStr('labas', 'size')
// aboutStr('labas', 'lowercase')
// aboutStr('labas', 'uppercase')
// aboutStr('labas', 'lowercaseCount')
// aboutStr('labas', 'uppercaseCount')
