const userName = "prabesh";
const userTag = 70;

//console.log(userName + userTag + "Value");

console.log(`Hello, I'm ${userName} and my tag is ${userTag}.`);

const gameName = new String("PrabeshBhandari");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,4); //doesnt take neg values
console.log(newString);

const anotherString = gameName.slice(-12,7); //can take neg values
console.log(anotherString);

const newStr = "    prabesh    ";
console.log(newStr);
console.log(newStr.trim());

const url = "https://www.prabeshbhandari.com/prabesh%20bhandari";
console.log(url.replace("%20","-"));
console.log(url.includes("hitesh"));


const updatedStr = "Ram-Narayan-Yadav";
console.log(updatedStr.split("-"));  //used for splitting in array
