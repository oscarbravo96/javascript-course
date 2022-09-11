let js = "amazing";
// console.log(40 + 8 + 23 - 10);
/*
console.log("Jonas");
console.log(23);
let firstName = "Calum";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas$matilda = "JM"

let myFirstJob = "Marine";
let myCurrentJob = "unemployed :/";


let jsIsFun = true;
console.log(jsIsFun);
jsIsFun = "YES";
console.log(jsIsFun)


const now = 2022;
const ageJonas = now - 2003;
const ageOscar = now - 1996;
console.log(ageJonas, ageOscar);

console.log(ageOscar * 2, ageJonas / 10, 2 ** 3);



let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI);
console.log(johnBMI);
console.log(markBMI > johnBMI);



const firstName = "oscar";
const job = "Marine";
const birthYear = 1996;
const year = 2022;
const oscar = "i'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(oscar);

const oscarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(oscarNew);
console.log(`Just a regular string...`)
console.log("String with \n\
multiple \n\
lines");
console.log(`String
has
many
lines`);



const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Sarah can start driving license 🐱‍🏍");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
};

const birthYear = 2007;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
} else {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
};


console.log(1991);
console.log("2000");
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(Number("oscar"));
console.log(typeof NaN);
console.log(String(23));
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * 3);
console.log("23" / 3);


console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));

const money = 0;
if (money) {
    console.log("Dont spend it all :)");
} else {
    console.log("YOU SHOULD GET A JOB!");
};


const age = 18;
if (age === 18) console.log("You just became and adult :D");

const favorite = Number(prompt("What's your favorite number?"));

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favorite === 7) {
    console.log("7 is cool too")
} else {
    console.log("those numbers suck")
};

if (favorite !== 23) console.log("Why not 23?");



const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive...")
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...")
}



dolphinsAverage = (96 + 108 + 89) / 3
koalasAverage = (88 + 100 + 110) / 3

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win with a score of ${dolphinsAverage}`)
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas win with a score of ${koalasAverage}`)
} else if (koalasAverage == dolphinsAverage) {
    console.log(`It's a tie!`)
} else {
    console.log(`It's a tie, no one wins`)
}



const day = "saturday";
// switch (day) {
//     case "monday":
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// };

if (day === "monday") {
    console.log(`Plan course structure
Go to coding meetup`);
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos")
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend")
} else {
    console.log("Not a valid day")
}



const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");



let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip + bill}`)

*/

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");