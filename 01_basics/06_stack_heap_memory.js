//STACK & HEAP MEMORY

//primitive datatype stored in stack
let myYoutubeChannel = "codespinner";
let anotherChannel = myYoutubeChannel;
anotherChannel = "prabeshpb27";
console.log(anotherChannel);
console.log(myYoutubeChannel);
//In primitive datatype, copy value gets passed. So changing copy value doesn't change the original one.


//non-primitive datatype stored in heap
let myObj = {
    userName: "Ramesh",
    userEmail: "ramesh.thakur@gmail.com"
}

let myObj1 = myObj;
myObj1.userEmail = "raju.shyam@gmail.com";
console.log(myObj.userEmail);
console.log(myObj1.userEmail);
// In non-primitive datatype, original value gets passed. So changing copy value directly changes the original one.

