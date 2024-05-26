const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(typeof(balance.toString())); //number changed into string
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherValue = 23.25;
console.log(otherValue.toPrecision(1));
console.log(otherValue.toPrecision(2));
console.log(otherValue.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // puts comma a/c US System
console.log(hundreds.toLocaleString("en-IN")); // puts comma a/c Indian System


// *************** MATHS ********************
console.log(Math); //try this in console of browser to get more features.
console.log(Math.abs(-4)); //absoute value

console.log(Math.round(4.5)); //rounding off
console.log(Math.ceil(4.2)); //picks top value
console.log(Math.floor(4.9)); //picks bottom value

console.log(Math.min(1,100,0,-1,4,22,34)); //selects minm of all
console.log(Math.max(300,432,33,456,21)); //selects maxm of all

console.log(Math.random()); //generates new value everytime in between 0 to 1
console.log(Math.floor(Math.random()*10)+1); //adding 1 always makes value greater than 0 -- Even if the value is 0, it will become 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*((max-min) +1))+ min)
//(max-min) => for range // (+ 1) for generating value more than 0 // (+ min) lower limit is minimum