console.log("I am a tutorial on loops")

let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);it is not the better way for the large no

//for-loop
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}
// for-in loop that gives the key of the object
let obj = {
    "name": "Vaidehi",
    "role": "Programmer",
    "company": "CodewithHarry AI"
}
//this for in loop prints the element and the key of the object
for (const k in obj) {
    console.log(k);
}
//for-of loop is for string ,array,etc
for (const v of "Vaidehi") {
console.log(v);
}
