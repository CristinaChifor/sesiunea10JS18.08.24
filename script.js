
let age = 30;
console.log(age);

let years = 5;
console.log(years);

age = 36;
console.log(age);

let username = "Cristina";
console.log("username: ");
console.log(username);

const piNumber = 3.14;
console.log(piNumber);
// piNumber = 4;
// console.log(piNumber);

/** Date numerice- Number
Operatori date numerice*/

/** Operatori aritmetici
 * Addition +*/ 

let firstNumber = 10;
let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log(sum);
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}.`);

// Substraction -

let pastAge = age -years;
console.log(`Acum ${years} aveam varsta de ${pastAge}.`);
console.log(`Acum ${years} aveam varsta de ${age - years}.`);

// Multiplication *

let numberA = 5;
let numberB = 10;
let multiplyResult = numberA * numberB;
console.log(`${numberA} inmultit cu ${numberB} este egal cu ${multiplyResult}.`)

// Division /

let numberC = 25;
let numberD = 10;
let divisionResult = numberC / numberD;
console.log(`${numberC} impartit la ${numberD} este egal cu ${divisionResult}.`)

// Modulo %

let numberE = 15;
let numberF = 4;
let moduloResult = numberE % numberF;
console.log(`Restul impartirii lui ${numberE} la ${numberF} este egal cu ${moduloResult}.`);

/**
 Tipuri de date in JavaScript
 1. Number
 */

 // Cum aflam cel mai mare numar de tip NUMBER?

 console.log(Number.MAX_SAFE_INTEGER);

 // Cum aflam cel mai mic numar de tip NUMBER?

 console.log(Number.MIN_SAFE_INTEGER);

 // 2. BigInt

 let bigIntNumber = 123456799833329n;
 console.log(`BigInt value is ${bigIntNumber}`);

 // 3. String

const myName = "Cristina Chifor";

// Primul caracter dintr-un string

const firstCharInName = myName[0];
console.log(`Primul caracter din sirul  '${myName}' este ${firstCharInName}.`);

const secondCharInName = myName[1];
console.log(`Al doilea caracter din sirul  '${myName}' este ${secondCharInName}.`);

// Lungimea unui String

const myNameLength = myName.length;
console.log(`Lungimea sirului '${myName}' este ${myNameLength}.`);

let lastCharIndex = myNameLength - 1;
let lastChar = myName[lastCharIndex];
console.log(`Ultimul caracter din sir este ${lastChar}`);

// Concatenarea unui String

let firstName = "Cristina";
let lastName = "Chifor";
let fullName = firstName + " "+ lastName;
console.log(`Numele meu complet este ${fullName}`);

let upperCase = fullName.toUpperCase();
console.log(upperCase);




















