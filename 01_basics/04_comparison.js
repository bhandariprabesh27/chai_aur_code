//same datatype comparison -- very easy --
console.log(1>2);
console.log(1<2);
console.log(1>=2);
console.log(1!=2);
console.log(1==2);

//different datatype comparison
console.log("2"==2);
console.log("2"<1);
console.log("02">1);

console.log(null>=0);
console.log(null==0);
console.log(null<0);

console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);

//strict check
console.log("2"===2); //returns true if datatype is also same