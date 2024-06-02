const userEmail = ""; // "" -> falsy value
if(userEmail){
    console.log("User got email.");
}
else{
    console.log("User doesn't got email.")
}

//falsy values =>
//false, 0, -0, BigInt 0n, null, undefined, NaN

//truthy values =>
// all values except falsy values are truthy values
// Notes: empty array [] is truthy value, {} is also truthy value
// "0" is truthy value, "false" is truthy value
// empty function -->   function(){} is also truthy value


const checkObj = {}
if(Object.keys(checkObj).length === 0){
    console.log("Object is empty.")
}



//Nullish Coelescing Operator (??) => used for null, undefined.

let val1;
val1 = 5 ?? 10; //always takes first as output only if first value is not null or undefined
console.log(val1);


let val2;
val2 = null ?? 10; // takes second value as first value is null
console.log(val2);


let val3;
val3 = undefined ?? 15; // takes second value as first value is undefined
console.log(val3);




//terniary operator => (condition) ? true : false
const teaPrice = 25;
(teaPrice >= 15) ? console.log("more than 15") : console.log("less than 15")