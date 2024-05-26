const nepalBatter=["Bhurtel","Aasif","Dipendra","Rohit"];
const nepalBowler=["Sandeep","Sompal","Karan"];

nepalBatter.push(nepalBowler);
console.log(nepalBatter); //as an array merge hunxa
console.log(nepalBatter[4]);
console.log(nepalBatter[4][1]);

//push le existing array lai return garna milxa
//concat garda new array ma return garna parxa

const a1 = ["Sandy","Bhuri","Aasif"];
const a2 = ["Sompal","Karan","Dippi"];
const allTeam = a1.concat(a2);
console.log(allTeam);

//spread operator
const b1 = ["Ram","Shyam","Hari"];
const b2 = ["Sita","Gita","Parbati"];
const collective = [...b1, ...b2];
console.log(collective);


const anotherArray = [1,2,3,[4,5,6],7,8,[5,6,7,8],9];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);



console.log(Array.isArray("Prabesh")); //checks whether array or not
console.log(Array.from("Prabesh")); //makes array
console.log(Array.from({name: "Prabesh"})); //returns []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
