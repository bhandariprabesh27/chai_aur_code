//Primitive
// 7 types 
// string, number, boolean, Null, Undefined, Symbol, BigInt

//Reference (Non-Primitive)
// Array, Objects, Functions

const score = 33;
const newScore = 133.3;

const isLoggedIn = false;
const value1 = null;
let userEmail;


let valueCheck = Symbol("123");
let newValueCheck = Symbol("123");
console.log(valueCheck === newValueCheck); // same value in symbol are not equal

const bigNumber = 22342213004844778n;
console.log(typeof(bigNumber));