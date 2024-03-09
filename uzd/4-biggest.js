console.clear();

// Idealus atvejis
// function biggest(list) {
//   if (!Array.isArray(list)) {
//     return "ERROR: duok array";
//   }

//   if (!list.length) {
//     return "ERROR: duok ne tuščią array";
//   }

//   let biggest = -Infinity;

//   for (let i = 0; i < list.length; i++) {
//     if (typeof list[i] !== "number" || !isFinite(list[i])) {
//       continue;
//     }

//     if (list[i] > biggest) {
//       biggest = list[i];
//     }
//   }

//   if (biggest === -Infinity) {
//     return "ERROR: sąraše nėra nei vieno normalaus skaičiaus";
//   }

//   return biggest;
// }

function biggest(list) {
  // tikriname tipą - turi būti array
  if (!Array.isArray(list)) {
    // jeigu ne array - return error
    return "ERROR: duok array";
  }

  // turiu array
  // jeigu tuščias - return error
  if (!list.length) {
    return "ERROR: duok ne tuščią array";
  }

  // turiu ne tuščią array
  // sakome, jog didžiausias skaičius yra -Infinity
  let biggest = -Infinity;

  // ciklu einame per array:
  for (let i = 0; i < list.length; i++) {
    // - tikriname ar array narys yra realus skaičius
    if (typeof list[i] !== "number" || !isFinite(list[i])) {
      // - jei ne:
      //    - tęsiame, eidami prie sekančio;
      continue;
    }
    // - jei taip (yra skaičiaus tipas):
    //    - lyginame su žinoma didžiausia reikšme
    //    - jeigu nauja reikšmė - didesnė, perrašome.
    if (list[i] > biggest) {
      biggest = list[i];
    }
  }
  // jeigu didžiausias skaičius vis dar liko -Infinity:
  if (biggest === -Infinity) {
    // - return error - sąraše nėra nei vieno normalaus skaičiaus
    return "ERROR: sąraše nėra nei vieno normalaus skaičiaus";
  }
  // grąžiname didžiausią skaičių
  return biggest;
}

console.log(biggest(true));
console.log(biggest("labas"));
console.log(biggest(["labas"]));
console.log(biggest(["labas", true, [], NaN, -Infinity]));
console.log(biggest([]));

console.log(biggest([1]), "->", 1);
console.log(biggest([1, 2, 3]), "->", 3);
console.log(biggest([-5, 78, 14, 0, 18]), "->", 78);
console.log(biggest([69, 69, 69, 69, 66]), "->", 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), "->", -1);
console.log(biggest(["labas", 5, "7"]));
