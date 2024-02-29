console.clear();
/*
OBJECT - objektas
{
    key1: value1,
    key2: value2,
    key3: value3
}
array - supaprastintas objektas
string - supaprastintas array
*/

// [vardas, amžius, vedybinis statusas]
const petras = ["Petras", 99, true, "a", "b", "c"];
const maryte = ["Maryte", 88, false];

// Sveiki, mano vardas VARDAS ir man KAŽKIEK metų.
const s1 = `Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metų.`;
console.log(s1);

const s2 = `Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metų.`;
console.log(s2);

const jonas = {
  name: "Jonas",
  age: 77,
  isMarried: false,
};

const ona = {
  isMarried: true,
  age: 66,
  name: "Ona",
};

console.log(ona);
console.log(ona["age"]);
console.log(ona["name"]);
console.log(ona["isMarried"]);
console.log(jonas);
console.log(jonas["age"]);
console.log(jonas["name"]);
console.log(jonas["isMarried"]);

console.log("------------------------");

const random = {
  tekstas: "Tekstas",
  skaicius: 777,
  arTiesa: true,
  kitas_variantas: "mhm...",
  "su tarpu": "ups...",
};

console.log(random["tekstas"]);
console.log(random["skaicius"]);
console.log(random["arTiesa"]);
console.log(random["kitas_variantas"]);
console.log(random["su tarpu"]);

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

const pazymiai = {
  0: 10,
  1: 2,
  2: 8,
  3: 4,
  4: 6,
};

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);

console.clear();

const student = {
  name: "Chuck Norris",
  age: Infinity,
  movies: [
    {
      title: "Walker: Texas ranger",
      year: 1990,
      actors: ["Chuck Norris 1", "Chuck Norris 2"],
    },
    {
      title: "Before me",
      year: -3000,
      actors: ["Chuck Norris 3", "Chuck Norris 4"],
    },
    {
      title: "Hell bound",
      year: 2000,
      actors: ["Chuck Norris 5", "Chuck Norris 6"],
    },
  ],
};

console.log(student["name"]);
console.log(student.name);

console.log(student["age"]);
console.log(student.age);

console.log(student.movies.length);
console.log(student.movies[0]);
console.log(student.movies[0].title);
console.log(student.movies[0].year);
console.log(student.movies[0].actors);
console.log(student.movies[0].actors[0]);
console.log(student.movies[0].actors[1]);
console.log("--------------------------");
console.log(student.movies[0].title);
console.log(student.movies[1].title);
console.log(student.movies[2].title);

console.clear();

const skaiciai = [10, 2, 8];
console.log(skaiciai);

skaiciai[0] = 1000;
console.log(skaiciai);

const auto = {
  marke: "Audi",
};
console.log(auto);

auto.marke = "Audinė";
console.log(auto);



auto.kaina = 1000;
console.log(auto);
console.log(auto.kaina);

auto.color = 'red';
console.log(auto);
auto.color = 'blue';
console.log(auto);

delete auto.color;
console.log(auto);

auto.savininkai = [];
console.log(auto);

