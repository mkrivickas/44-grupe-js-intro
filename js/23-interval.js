console.clear();
/*
setInterval/clearInterval
setTimeout/clearTimeout
*/

// console.log("START");

// const timer1 = setTimeout(() => {
//   console.log("LABAS...");
//   if (true) {
//     clearTimeout(timer1);
//   }
// }, 1000);

// const timer3 = setTimeout(() => {
//   clearTimeout(timer1);
// }, 100);

// let i = 1;
// const timer2 = setInterval(() => {
//   const date = new Date();
//   console.log(date.getTime());
//   i++;

//   // console.log("Ką tu?...", i++, timer2);
//   if (i >= 10) {
//     clearInterval(timer2);
//   }
// }, 1000);

// console.log("END");

// 1970-01-01 00:00:00.000

const t = 1685946935268; //ms
// console.log(t);
// console.log(t / 1000);
// console.log(t / 1000 / 60);
// console.log(t / 1000 / 60 / 60);
// console.log(t / 1000 / 60 / 60 / 24);
// console.log(t / 1000 / 60 / 60 / 24 / 365.25);
// console.log(2023.5 - t / 1000 / 60 / 60 / 24 / 365.25);

let date = new Date().getTime();
console.log(date);

setInterval(() => {
  const now = new Date().getTime();
  console.log(now - date);
  date = now;
}, 1000);
