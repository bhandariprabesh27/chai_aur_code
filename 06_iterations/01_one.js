// for(i=0;i<10;i++){
//     const element = i;
//     if(element==5){
//         console.log("Hello I am five.");
//     }
//     console.log(element);
// }



// for(i=0;i<=10;i++){
//     console.log(`Outer Loop ${i}`);
//     for(j=0;j<=10;j++){
//         console.log(`Inner Loop ${j} and Inner Loop ${i}`);
//     }
// }



// for(i=0;i<=10;i++){
//     console.log(`Multiplicatiion of ${i}`);
//     for(j=0;j<=10;j++){
//         console.log(i + "*" + j + "=" + (i*j));
//     }
// }




// const myArray = ["Sandy", "Kushal", "Rohit"];
// console.log(myArray.length); //just for checking length of array
// for(i=0; i < myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
// }




// for(i=1;i<=20;i++){
//     if(i==5){
//         console.log("5 is detected !!!");
//         break; //loop nai sakinxa
//     }
//     console.log(`value of i is ${i}`);
// }



for(i=1;i<=20;i++){
    if(i==5){
        console.log("5 is detected !!!");
        continue; //talako lines skip hunxa but loop continue hunxa
    }
    console.log(`value of i is ${i}`);
}