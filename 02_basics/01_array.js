const myArr = [1,20,22,33,54,"hari"];
console.log(myArr[0]);
myArr.push(6);
myArr.push(8);
myArr.pop(); //removes last element from array
console.log(myArr);

const newArr = [20,22,32,45,67,87];
//newArr.unshift(9); //start ma add hunxa ani baki sabai ko position shift garxa
newArr.shift(); //start ko lai hatauxa
console.log(newArr);

const valArr = [3,6,8,2,12,18,21];
console.log(valArr.includes(3));
console.log(valArr.includes(9));
console.log(valArr.indexOf(8));

const khatraArr = valArr.join(); //joins valArr as a string
console.log(valArr); //original valArr print hunxa
console.log(khatraArr); //string print hunxa
console.log(typeof(khatraArr)); //string

//slice and splice
const arr1 = [10,20,30,40,50,60,70,80];
console.log("A", arr1); //original array

const myA1 = arr1.slice(1,3);
console.log(myA1);
console.log("B", arr1); //original array

const myA2 = arr1.splice(1,3);
console.log(myA2);
console.log("C", arr1); //original array

//slice ma last index print hudaina but splice ma hunxa
//slice ma original array ma change aaudaina but splice ma original array bata spliced value hatxa


