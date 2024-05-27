if(true){
    let a = 20;
    const b = 40;
    var c = 60;
}
//console.log(a); //undefined output aauxa
//console.log(b); //undefined output aauxa
console.log(c); // value 60 output aauxa

//{} lai scope vaninxa
//scope vitra define vako let ra const scope bahira access hudaina
//But scope vitra define vako var scope bahira pni access hunxa


//--------------------------------------------------
let num1 = 200;
if(true){
    let num1 = 10;
    let num2 = 20;
    let num3 = 30;
    console.log("INNER: ", num1); //scope vitra ko num1 ko value print hunxa
}
console.log(num1); //scope bahira ko num1 ko value print garauxa
