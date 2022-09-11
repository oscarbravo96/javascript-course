'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");

const interface = "Audio";



function logger() {
    console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



function calcAge1(birthYeah) {
    const age = 2037 - birthYeah;
    return age;
}

const age1 = calcAge1(1996);
console.log(calcAge1(1996))

const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);
console.log(age1, age2);



const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1996, "Oscar"));
console.log(yearsUntilRetirement(1992, "Paddy"));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
console.log(fruitProcessor(2, 3)); 


const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎈`)
        return -1;
    }
    // return retirement;
    // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1996, "Oscar"));
console.log(yearsUntilRetirement(1950, "Paddy"));



const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;
const avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

const avgDolphins2 = calcAverage(85, 54, 41);
console.log(avgDolphins2);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgKoalas2);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else return (`No one wins`)
}

console.log(checkWinner(avgDolphins, avgKoalas))
console.log(checkWinner(avgDolphins2, avgKoalas2))



const friend1 = "Oscar";
const friend2 = "Paddy";
const friend3 = "Calum";

const friends = ["Paddy", "oscar", "Calum"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Eric";
console.log(friends);

// friends = ["Boob", "Alice"];
const firstName = "Oscar";
const oscar = [firstName, "Bravo", 2022 - 1996, "Marine", friends];
console.log(oscar);

const calcAge = function (birthYeah) {
    return 2022 - birthYeah;
}

const years = [1992, 1996, 1998, 1997];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));

const ages = [calcAge(years[0]), calcAge(years[1])];
console.log(ages);



const friends = ["Paddy", "oscar", "Calum"];
const newLength = friends.push("Eric");
console.log(friends);
console.log(newLength);

friends.unshift("Tension");
console.log(friends);
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends.indexOf("Paddy"));
console.log(friends.indexOf("Michael"));

console.log(friends.includes("Paddy"));
console.log(friends.includes("Michael"));

if (friends.includes("Paddy")) {
    console.log("You have a friend named Paddy");
}


function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        return (bill * .15)
    } else {
        return (bill * .2)
    }
}

console.log(calcTip(100));
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));

const bills = [15, 18.75, 111, 8.8];
const total = [(calcTip(100)) + 100, (calcTip(125)) + 125, (calcTip(555)) + 555, (calcTip(44)) + 44];
console.log(total);



const oscar = {
    firstName: "Oscar",
    lastName: "Bravo",
    age: 1996,
    job: "Marine",
    friends: ["Paddy", "Calum", "Eric"]
};
console.log(oscar);
console.log(oscar.lastName);
console.log(oscar["lastName"]);
const nameKey = "Name";
console.log(oscar["first" + nameKey]);
console.log(oscar["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Oscar? Choose between firstName, lastName, age, job and friends");

// if (oscar[interestedIn]) {
//     console.log(oscar[interestedIn]);
// } else {
//     console.log("Choose one of the listed options");
// }

oscar.location = "Georgia";
oscar["twitter"] = "@oebravo";
console.log(oscar);

console.log(oscar.firstName + " has " + oscar.friends.length + " friends, and his best friend is called " + oscar.friends[0]);



const oscar = {
    firstName: "Oscar",
    lastName: "Bravo",
    birthYeah: 1996,
    job: "Marine",
    friends: ["Paddy", "Calum", "Eric"],
    hasDriversLicense: true,
    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah;
    // }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYeah;
    // }
    calcAge: function () {
        this.age = 2022 - this.birthYeah
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${oscar.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};

console.log(oscar.calcAge());
console.log(oscar.age);
console.log(oscar.getSummary());
// console.log(oscar["calcAge"](1991));




const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);
const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    }
}
john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BME (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BME (${mark.bmi})`)
} else console.log("They have the same BMI")


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}



const jonas = [
    "Jonas",
    "Schmedtmann",
    2022 - 1996,
    "teacher",
    ["padddy", "Calum", "Eric"],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1992, 1996, 1997, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}

console.log(ages);

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
}
console.log(`__BREAK WITH NUMBER__`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;
    console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 💪`)
    }
}



// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep} 💪`)
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weight repetition ${rep} 💪`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));