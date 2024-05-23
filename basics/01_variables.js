const accountId = "Ram";
let accountEmail = "abc@gmail.com";
var accountPassword = "1234@123";
accountCity = "Narayanghat";

accountEmail = "ramesh@gmail.com";
accountPassword = "12333333xyz";
accountCity = "Butwal";
// accountId = 2  //multiple values of same const Not allowed
let accountState;
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of
its block scope and functional scope
*/