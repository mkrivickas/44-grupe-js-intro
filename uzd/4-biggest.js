console.clear();

let x = [-5, 78, 14, 0, 18];

function biggest(list) {
  let result = list[0];

  // logika....
  for (let i = 1; i < list.length; i++) {
    if (list[i] > result) {
      result = list[i];
    }
  }

  return result;
}

console.log(biggest([1]), "->", 1);
console.log(biggest([1, 2, 3]), "->", 3);
console.log(biggest([-5, 78, 14, 0, 18]), "->", 78);
console.log(biggest([69, 69, 69, 69, 66]), "->", 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), "->", -1);

console.log(biggest("lada"), "->", "Pateikta netinkamo tipo reikšmė.");
console.log(biggest([]), "->", "Pateiktas sąrašas negali būti tuščias.");
