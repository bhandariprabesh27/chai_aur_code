const balance = 900;
if(balance<500){
    console.log("Balance is less than 500.");
}
else if(balance<750){
    console.log("Balance is less than 750.");
}
else if(balance<900){
    console.log("Balance is less than 900.");
}
else{
    console.log("Balance must be equal or greater than 900.");
}




const isLoggedIn = true;
const debitCard = true;
if(isLoggedIn && debitCard){   //AND (all must be true)
    console.log("You are allowed for shopping");
}


const logInFromGmail = false;
const loginFromEmail = true;
if (logInFromGmail || loginFromEmail){   //OR (one must be true)
    console.log("You can buy course.");
}