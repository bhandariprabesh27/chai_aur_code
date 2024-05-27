function calculateCartPrice(... num1){ // ... is used to take multiple values
    return num1;
}
console.log(calculateCartPrice(325));
console.log(calculateCartPrice(200,300,150)); //if function ko parameter agadi ... use navako vaye first element 200 matra print hunthyo

const userDetails = {
    userName: "Prabesh Bhandari",
    userID: 101,
    userAddress: "Chitwan"
}
function handleObject(anyObject){
    console.log(`The name of user is ${anyObject.userName} and his/her ID is ${anyObject.userID}.`);
}
handleObject(userDetails);



const myArr = [20,21,32,45,67,74];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArr));