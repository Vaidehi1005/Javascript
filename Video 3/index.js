console.log("Hello I am conditional tutorial")
//console log just print karse node js k console par
let age = 10;
//ek var banayo age je block scope che 
 let grace = 2;
//ek var banayeo grace e pn block scope che
age+=grace;//x=x+y
age-=grace;//x=x+-y
age*=grace;//x=x*y
age/=grace;//x=x/y
age**=grace;//x=x**y

console.log(age );//addition thase aama 2 var nu
console.log(age - grace);//sub 
console.log(age * grace);//mul
console.log(age / grace);//div
console.log(age ** grace);//exp 3^2=9
console.log(age % grace);//aa operator reminder aapse

if (age!= 18) {
    console.log("You can drive");//if else condtition if age+grace bane 18 thi vadhare hase to if ma k else ma
}
else {
    console.log("You cannot drive");
}