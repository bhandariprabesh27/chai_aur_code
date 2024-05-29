const user = {
    name : "Prabesh",
    age : 22,

    welcomeMsg : function(){
        console.log(`Welcome ${this.name}, to our website.`);
    }
}

user.welcomeMsg();
user.name = "Ramesh"; //paxi name change vayo
user.welcomeMsg();


//------------------------------------------------------------------------------------

const clubProfile = {
    cName: "RCB",
    cCaptain: "Virat Kohli",
    cCaptainAge: 35,
    wlcMsg : function(){
        console.log(`Welcome ${this.cCaptain} in ${this.cName}`);
        console.log(this); //just for testing what it prints
    }
}
clubProfile.wlcMsg();
console.log(this); //{} yesto empty print garauxa //current context empty dekhako xa

//---------------------------------------------------------------------------------------

function chai(){
    let username = "Prabesh";
    console.log(this.username); //undefined aauxa kina ki this function ma use garne hoina, object ma garne ho
}
chai();

//----------------------------------------------------------------------------------------

const coffee = () => {  // arrow function syntax is () => { }
    let actorName = "Pradeep";
    console.log(this.actorName); //undefined nai aauxa
}
coffee();

//---------------------------------------------------------------------------------

const addTwo = (num1, num2)=>{
return num1+num2;
}
console.log(addTwo(6,5));

//-----------------------------------------------------------------------------------

const addThree = (num1,num2,num3) => (num1 + num2 + num3); 
// arrow function le implicit return garxa, which means returns on the same line

console.log(addThree(1,2,3)); // function call garda mathiko print hunxa