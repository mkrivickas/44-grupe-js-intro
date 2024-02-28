console.clear();

function sum(a, b) {
    console.log('>>>', a, b);
    return a + b
}

const s1 = sum(2, 2);
console.log(s1);

const s2 = sum(7, 5);
console.log(s2);

const s3 = sum(-16, -15);
console.log(s3);

const s4 = sum(3.14, 2.72);
console.log(s4);

function hi(name) {
    return `Hi, my name is ${name}!`;
}

//  Hi, my name is Petras!
//  Hi, my name is Maryte!
//  Hi, my name is Jonas!
//  Hi, my name is Ona!

console.log(hi('Petras'));
console.log(hi('Maryte'));
console.log(hi('Jonas'));
console.log(hi('Ona'));

// Sveiki, aš Petras ir man 16 metų
// Sveiki, aš Maryte ir man 160 metų.
// Sveiki, aš Jonas ir man 36 metų.
// Sveiki, aš Ona ir man 99 metų.

function prisistatymas(name, age) {
    return `Sveiki, aš ${name} ir man ${age} metu.`
}

console.log(prisistatymas('Petras', 16))
console.log(prisistatymas('Maryte', 160))
console.log(prisistatymas('Jonas', 36))
console.log(prisistatymas('Ona', 99))