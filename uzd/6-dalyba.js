console.log();

function division(a, b) {
  if (typeof a !== "number") {
    return "ERROR: pirmas parametras ne skaičius";
  }
  //   pagauna ir Infinity, ir NaN
  if (!isFinite(a)) {
    return "ERROR: pirmas parametras turi būti realus skaičius";
  }
  if (typeof b !== "number") {
    return "ERROR: antras parametras ne skaičius";
  }
  if (Math.abs(b) === Infinity) {
    return "ERROR: antras parametras negali būti Infinity";
  }
  if ("" + b === "NaN") {
    return "ERROR: antras parametras negali būti NaN";
  }

  const result = a / b;

  return result;
}

// ne tipai
console.log(division("labas", 5));
console.log(division(5, "labas"));
console.log(division("labas", "rytas"));
console.log(division(7, false));
console.log(division(true, 5));

// ne skaičiai
console.log(division(Infinity, 5));
console.log(division(5, Infinity));
console.log(division(Infinity, Infinity));
console.log(division(-Infinity, 5));
console.log(division(5, -Infinity));
console.log(division(-Infinity, -Infinity));

console.log(division(NaN, 5));
console.log(division(5, NaN));
console.log(division(NaN, NaN));

// ne tipai
console.log(division([], 1));
console.log(division([], []));
console.log(division(2, []));

console.log(division({}, 1));
console.log(division({}, {}));
console.log(division(2, {}));

console.log(division(division, 1));
console.log(division(division, division));
console.log(division(2, division));

// ok
console.log(division(7, 5));
console.log(division(-7, 5));
console.log(division(-7, -5));
console.log(division(7, -5));
