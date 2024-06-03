let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof(myDate)); //datatype of date is Object


let myCreatedDate = new Date(2023, 0, 23); // year,month,date //month starts from 0
console.log(myCreatedDate.toDateString());

let newCreatedDate = new Date(2023,0,23,5,12)//year,month,date,hr,min
console.log(newCreatedDate.toLocaleString());

let CreatedDate = new Date("2024-01-14")
console.log(CreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp); //millisecond
console.log(CreatedDate.getTime()); //CreatedDate ko milisecond

console.log(Math.floor(Date.now()/1000)); // divide by 1000 gets second from millisecond

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //month starts from 0 so we add 1
console.log(newDate.getDay() + 1); // day starts from 0

console.log(newDate.toLocaleString("default", {
    weekday: "long"
}))



