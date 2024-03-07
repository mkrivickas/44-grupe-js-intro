console.clear();

function numberLength(num) {
  if (typeof num !== "number" || !isFinite(num)) {
    return "Pateikta netinkamo tipo reikšmė";
  }

  // Convert number to string to get its length
  // num = Math.abs(num);
  // num = num < 0 ? -num : num;

  const digits = "" + num;
  let count = digits.length;

  if (num % 1 !== 0) {
    count--;
  }

  if (num < 0) {
    count--;
  }

  return count;
}

console.log(numberLength(true)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength("asd")); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(NaN)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength([])); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength({})); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(undefined)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(null)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(numberLength)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(Infinity)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(-Infinity)); // Output: Pateikta netinkamo tipo reikšmė

console.log(numberLength(5)); // Output: 1
console.log(numberLength(781)); // Output: 3
console.log(numberLength(37060123456)); // Output: 11
console.log(numberLength(-5)); // Output: 1
console.log(numberLength(-781)); // Output: 3
console.log(numberLength(-37060123456)); // Output: 11
console.log(numberLength(3.14)); // Output: Pateikta netinkamo tipo reikšmė
console.log(numberLength(-3.14)); // Output: Pateikta netinkamo tipo reikšmė
