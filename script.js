
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

let lowerCase = fullName.toLowerCase();
console.log(lowerCase);

let substringResult = fullName.substring(1, 4);
console.log(substringResult);

// verificare numar par/ impar

let checkedNumber = 24;
let remainder = checkedNumber % 2;
let isEven = remainder === 0;
console.log(`Number ${checkedNumber} is even: ${isEven}`);

// 4. Boolean (True/ False)

let isAdult = true;
console.log(`isAdult = ${isAdult}`);
let isOld = false;
console.log(`isOld = ${isOld}`);

// 5. Null & Undefined

let nullValue = null;
console.log(`Null value = ${nullValue}`);

let notInitialized;
console.log(`notInitialized = ${notInitialized}`);

/**
 Operatori in JavaScript
 1. Operatori de atribuire
 */

 let y = 5;
 y += 3; // => y = y + 3; y= 5 + 3; y = 8;
 y -= 2; // => y = y - 2; y= 5 - 2; y = 3;
 y *= 2; // => y = y * 2; y= 5 * 2; y = 10;
 y /= 2; // => y = y / 2; y= 5 / 2; y = 2.5;

 // adaugare +1 la un numar

 let x = 10;
 console.log(`x=`, x);
 x++; // incrementare
 console.log(`x=`, x); 

 // 2. Operatori de comparatie
 // 2.1 Operatorul de egalitate == compara valoarea

 let value1 = 22;
 let value2 = 22;
 let value3 = 23;
 let value4 = "22";

 let firstComperedResult = value1 == value2;
 console.log(`${value1} == ${value2} => ${firstComperedResult}`);

 let secondComperedResult = value1 == value3;
 console.log(`${value1} == ${value3} => ${secondComperedResult}`);

 let thirdComperedResult = value1 == value4;
 console.log(`${value1} == ${value4} => ${thirdComperedResult}`);

 // 2.2 Operatorul de egalitate stricta === compara si tipul de date

 let strictEqualComparison = value1 === value4;
 console.log(`${value1} === ${value4} => ${strictEqualComparison}`);

 let strictEqualComparison2 = value1 === value2;
 console.log(`${value1} === ${value2} => ${strictEqualComparison2}`);

 let strictEqualComparison3 = value1 === value3;
 console.log(`${value1} === ${value3} => ${strictEqualComparison3}`);

 // 2.2 Operatorul de comparare mai mic (<), mai mic sau egal (<=)

 let num1 =5;
 let num2 = 6;
 let num3 = 5;
 let lessThanComparison =  num1 < num2;
 console.log(`${num1} < ${num2} => ${lessThanComparison}`);

 let lessThanComparison2 =  num2 < num1;
 console.log(`${num2} < ${num1} => ${lessThanComparison2}`);

 let lessOrEqualComparison = num1 <= num2;
 console.log(`${num1} <= ${num2} => ${lessOrEqualComparison}`);

 let  lessOrEqualComparison2 = num1 <= num3;
 console.log(`${num1} <= ${num3} => ${lessOrEqualComparison2}`);

 // 2.3 Operatorul de comparare mai mare (>), mai mare sau egal (>=)

 let num4 = 5;
 let num5 = 6;
 let num6 = 5;
 let moreThanComparison =  num4 > num5;
 console.log(`${num4} > ${num5} => ${moreThanComparison}`);

 let moreThanComparison2 =  num5 > num4;
 console.log(`${num5} > ${num4} => ${moreThanComparison2}`);

 let moreOrEqualComparison = num4 >= num5;
 console.log(`${num4} >= ${num5} => ${moreOrEqualComparison}`);

 let  moreOrEqualComparison2 = num4 >= num6;
 console.log(`${num4} >= ${num6} => ${moreOrEqualComparison2}`);

// 3. Operatori logici- boolean data
 
 let trueValue = true;
 let falseValue = false;

 // 3.1 Operatorul si logic &&

 let logicalAndResult = trueValue && falseValue;
 console.log(`${trueValue} && ${falseValue} => ${logicalAndResult}`);

logicalAndResult = falseValue && falseValue;
console.log(`${falseValue} && ${falseValue} => ${logicalAndResult}`);

logicalAndResult = trueValue && trueValue;
console.log(`${trueValue} && ${trueValue} => ${logicalAndResult}`);

 // 3.2 Operatorul sau logic ||

 let logicalOrResult = trueValue || falseValue;
 console.log(`${trueValue} || ${falseValue} => ${logicalOrResult}`);

 logicalOrResult = falseValue || falseValue;
 console.log(`${falseValue} || ${falseValue} => ${logicalOrResult}`);

 logicalOrResult = trueValue || trueValue;
 console.log(`${trueValue} || ${trueValue} => ${logicalOrResult}`);

  // 3.3 Operatorul negare logica !

  let notTrueValue = !trueValue;
  console.log(`!${trueValue} => ${notTrueValue}`);

  let notFalseValue = !falseValue;
  console.log(`!${falseValue} => ${notFalseValue}`);





























