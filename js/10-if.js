console.clear();
/*
IF - palyginimas

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===, !=, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

Loginiai operatoriai:
&& (and), || (or), ! (not)

Kodo šablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {}... else if () {}
*/

if (4 > 2) {
  console.log("taip");
}

if (7 < 1) {
  console.log("7 < 1");
} else {
  console.log("7 ne < uz 1");
}

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
  console.log("užeik...😎");
} else {
  console.log(`dar palauk ${ageLimit - userAge} metų...`);
}

console.log("-----------------------");

console.log("START");

const diena = 3;
if (diena === 1) {
  console.log("pirmadienis");
} else if (diena === 2) {
  console.log("antradienis");
} else if (diena === 3) {
  console.log("trečiadienis");
} else if (diena === 4) {
  console.log("ketvirtadienis");
} else if (diena === 5) {
  console.log("penktadienis");
} else if (diena === 6) {
  console.log("šeštadienis");
} else if (diena === 7) {
  console.log("sekmadienis");
} else {
  console.log("tokios dienos savaitėje nėra...");
}

console.log("END");

console.log("-----------------------");

// kodo nestinimas

const arSvieciaSaule = false;
const arLyja = false;

let kaDaryti = "nežinau";

if (arSvieciaSaule) {
  kaDaryti = "eisim i kiemą";
  if (arLyja) {
    kaDaryti = "žiūrim į vaivorykštę :O";
  } else {
    kaDaryti = "deginamės pležiuke B-)";
  }
} else {
  kaDaryti = "kodinsim... ;-(";
  if (arLyja) {
    kaDaryti = "koks skirtumas... vis vien būsiu namie";
  } else {
    kaDaryti = "stebim žvaigždes";
  }
}

console.log(kaDaryti);

console.log("-----------------------");

console.log("START");

const day = 7;

if (day == 1) {
  console.log("pirm");
} else {
  if (day === 2) {
    console.log("ant");
  } else {
    if (day === 3) {
      console.log("treč");
    } else {
      if (day === 4) {
        console.log("ketv");
      } else {
        if (day === 5) {
          console.log("penkt");
        } else {
          if (day === 6) {
            console.log("šešt");
          } else {
            if (day === 7) {
              console.log("sekm");
            } else {
              console.log("nieko nesakau :P");
            }
          }
        }
      }
    }
  }
}

console.log("END");

console.log("-----------------------");

const dd = 4;
let kokiaDiena = "tokia diena neegzistuoja";

if (dd === 1) {
  kokiaDiena = "pirmadienis";
}

if (dd === 2) {
  kokiaDiena = "antradienis";
}

if (dd === 3) {
  kokiaDiena = "trečiadienis";
}

console.log(kokiaDiena);

console.log("-----------------------");

const siandien = 3.14;

function kokiaSavaitesDiena(dienosNr) {
  const dienuPavadinimai = [
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis",
    "sekmadienis",
  ];

  const savaitesDiena = dienuPavadinimai[dienosNr - 1];

  if (savaitesDiena === undefined) {
    return "tokios dienos nėra";
  } else {
    return savaitesDiena;
  }
}

console.log(kokiaSavaitesDiena(siandien));
console.log(kokiaSavaitesDiena(1));
console.log(kokiaSavaitesDiena(2));
console.log(kokiaSavaitesDiena(7));
console.log(kokiaSavaitesDiena(8));

console.log("-----------------------");

if (777 !== 8){
    console.log('lygu')
} else {
    console.log('nelygu')
}

console.clear();

if ('888' == 888){
    console.log('taip')
} else {
    console.log('ne')
}

console.log('labas' * '2')

// LOGINIAI OPERATORIAI

if (4 > 2){
    if (8 < 20){
        console.log('>>> and 1');
    }
}

if (4 > 2 && 8 < 20) {
    console.log('>>> and and 2');
}

if (1 < 0 || 2 < 4){
    console.log('>>> arba')
}

if ((0 === 0 || 2 === 8) && 4 === 4){
    console.log('mix')
}

// (0 === 0 || 2 === 8) && 4 === 4)
// (true || 2 === 8) && 4 === 4)
// (true || false) && 4 === 4)
// (true || false) && true)
// true && true
// true

console.log("-----------------------");

const a = true;

if(!a){
    console.log('taip');
} else {
    console.log('ir ne');
}

const error = true;

if (!error){
    console.log('all good');
} else {
    console.log('ERROR');
}

// visi skaičiai - TRUE, išskyrus 0 ir NaN.
// undefined - FALSE
// null - FALSE
// visi string - TRUE, išskyrus tuščią ''
// visos function - TRUE
// visi array - TRUE
// visi object - TRUE

function empty(){}

const nameInputValue = '';

if(!nameInputValue){
    console.log('KAZKAS...');
} else {
    console.log('Ne Kazka...');
}

const negative = !!nameInputValue;
console.log(negative);