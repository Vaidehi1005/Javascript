console.log("Hello I am conditional tutorial")
//console log just print karse node js k console par
let age = 18;
//ek var banayo age je block scope che 
let grace = 2;
//ek var banayo grace e pn block scope che
console.log(age + grace);
//addition thase aama 2 var nu
console.log(age - grace);//sub 
console.log(age * grace);//mul
console.log(age / grace);//div
console.log(age ** grace);//exp 3^2=9

if (age + grace > 18) {
    console.log("You can drive");//if else condtition if age+grace bane 18 thi vadhare hase to if ma k else ma
}
else {
    console.log("You cannot drive");
}