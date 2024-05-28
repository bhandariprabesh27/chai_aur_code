function one(){
   const username = "Prabesh";

   function two(){
    const website = "facebook";
    console.log(username);
   }

  // console.log(website); //error aauxa coz website ko scope two(){} vitra xa

  two(); 
}

one(); // one() vitra two() call gareko hunale line-6 print hunxa // yedi line-11 lai comment garne ho vane output khali aauxa 


//----------------------------------------------------------------

if(true){
    const adminName = "Prabesh";
    if(adminName==="Prabesh"){
        const website = " Facebook";
        console.log(adminName + website);
    }
    //console.log(website); //error dekhauxa coz website is out of its scope
}
//console.log(adminName); //error aauxa coz adminName is out of its scope


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));  //can be runned before declaration
function addOne(num){
    return num+1;
}

//console.log(addTwo(3)); //can't be runned before declaration because function is stored
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(3)); //yes this is fine

