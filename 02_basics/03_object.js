//singleton
//Object.create

//Object Literals

const mySym = Symbol("key1"); //symbol
const jsUser = {
    name: "prabesh",
    [mySym]: "mykey",  //symbol use garda [] bhitra use garnu parne
    age: 21,
    userId: 122,
    "fullName": "Prabesh Bhandari", //remember key is in string
    location: "Nepal",
    gmail: "prabesh.chitwan@gmail.com"
}

console.log(jsUser.age);
console.log(jsUser["age"]); //sq bracket vitra key pass garda string pass garnu parne
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]); // [] bhitra "" use garnu naparne coz its symbol not string

jsUser.gmail = "prabesh.chatgpt@gmail.com";
Object.freeze(jsUser); //freeze garepaxi aaba garne changes haru accept gardaina
jsUser.gmail = "raju@gmail.com"; //object le yo lidaina coz its already freezed
console.log(jsUser);


const myObj = {
    userName : "Ram Shrestha",
    userId : 234,
    userAge : 22,
    userEmail: "ramstha2024@gmail.com",
    userValidation : "Yes"
}


console.log(myObj);
myObj.greeting = function(){
    console.log("Hello Namaskar! How are you?");
}
console.log(myObj.greeting());

myObj.greeting2 = function(){
    console.log(`Hello, I am ${this.userName}`); //this. lagayepaxi keys haru auto suggest garxa
}
console.log(myObj.greeting2());