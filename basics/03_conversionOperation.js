let score = "162";

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

//secondcase
let target = "33abc";
console.log(typeof(target)); //string
let valueNumber = Number(target); 
console.log(typeof(valueNumber)); //number
console.log(valueNumber); //Nan

// "162" => 162
// "33abc" => NaN
// true => 1
// false => 0

let loggedIn = 1;
let booleanValueOfloggedIn = Boolean(loggedIn);
console.log(booleanValueOfloggedIn) //true

//conversion to Boolean
// 1 => true
// 0 => false
// "" => false
// "prabesh" => true

let someNumber = 33;
let newStr = String(someNumber);
console.log(newStr); //33
console.log(typeof(newStr)); //string