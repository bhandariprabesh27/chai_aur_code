function userName(){
    console.log("c");
    console.log("o");
    console.log("d");
    console.log("e");
    console.log("r");
}
userName();
userName(); //we can call function anytime with its name


function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
    console.log("Prabesh"); //return value vaisakepaxi ko line function le read gardaina
}
const result = addTwoNumbers(1,2);
console.log("Result:", result);

//------------------------------------------------
function userLogIn(userName){
    if(userName === undefined){ //value empty pass garyo vane undefined hunxa
        console.log("Please Enter a Valid Username");
        return; //yedi yeha return use garena vane talako statement ni print hunxa....coz return paxi ko lines function le read gardaina
    }
    return`${userName} just logged in.`;
}
userLogIn("Prabesh"); // kei pni print gardaina because function ma return gareko value lai out-of-function print garda console.log lagauna parxa
console.log(userLogIn("Prabesh")); //yo bata balla print hunxa
console.log(userLogIn("Shyam"));
console.log(userLogIn()); // empty value pass garda mathi ko if-case run hunxa
