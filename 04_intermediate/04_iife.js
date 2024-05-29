//iife = immediately invoked function expression
//syntax:   (function fname(){expression;})();

(function chai(){
    console.log("DB CONNECTED!!!")
})();


(()=>{console.log("DB CONNECTED 2!!!")})(); //arrow function ma ni kaam garxa



(function coffee(cName){
    console.log(`The coffee you have entered is ${cName}.`)
})("Premium Beans");      // yeha j value pass garyo tyo function ko parameter ma janxa