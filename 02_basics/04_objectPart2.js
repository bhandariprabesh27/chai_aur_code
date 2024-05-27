const tinderUser = new Object(); //tinderUser lai object declare gareko
// const tinderUser = {}; //yesari pni object declare garna sakine

tinderUser.id = 102;
tinderUser.name = "Nabin";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //output ma array vitra array aauxa [key,value] format ma
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
console.log(tinderUser.hasOwnProperty("isLogged")); //false



const regularUser = {
    email: "srikant@gmail.com",
    fullname: {
        userFullname: {
        firstname: "Srikant",
        lastname: "Dube"
    }
}
}
console.log(regularUser);
console.log(regularUser.fullname.userFullname);
console.log(regularUser.fullname.userFullname.firstname);



//--------MERGING OBJECTS-----------------

const obj1 = {id1:"A", id2:"B"}
const obj2 = {id3:"A", id4:"B"}
const obj3 = {obj1, obj2}
console.log(obj3);


const myobj1 = {sn1: "001X", sn2: "002Y"}
const myobj2 = {sn3: "003Z", sn4: "004A"}
const myobj3 = Object.assign({},myobj1, myobj2);
console.log(myobj3);


const hero1 = {n1: "1X", n2: "2Y"}
const hero2 = {n3: "3Z", n4: "4A"}
const hero3 = {...hero1, ...hero2}  //best way to merge objects
console.log(hero3);


//-----------------------------------------------------------------

const users = [
    {
        id: 1,
        email: "raju12@gmail.com"
    },
    {
        id: 2,
        email: "sanjay21@gmail.com"
    },
    {
        id: 1,
        email: "sita12@gmail.com"
    }         
]

console.log(users[0].email);