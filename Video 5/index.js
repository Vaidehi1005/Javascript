// Functions
//functions are used for writing the code with var we dont have to write again we can reuse the code in the fun just by changing the name
function nice(name) {
    console.log("Hey " + name + " I am nice!");
    console.log("Hey " + name + " I am fine!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " you are good at studies!");
}
nice("Vaidehi");

nice("Parthvi");

function sum(a, b, c = 3) {
    console.log(a, b, c);
    console.log(a + b);//this is the void fun which is not returning any value and just printing the value
    return a + b + c;//this is for returning the integer value when passing the int value and storing into result and then we will print the result
}
sum(11, 222);

result1 = sum(22, 10);
result2 = sum(2, 9);
result3 = sum(122, 10, 2);//passing c is optional if we are passing then it's value would be this
//the fun is used for reusability

console.log("The sum of the number is: ", result1);
console.log("The sum of the number is: ", result2);
console.log("The sum of the number is: ", result3);

//arrow function
//arrow fun ma aapde kai ritna var ni andar fun ne nakhi sakie 
const fun1 =(x)=>{//fun1 ek var che ane e fun pn che so bane che and e value store kari sake 
    console.log("I am an arrow function ",x);
}
fun1(10);
fun1(69);
fun1(89);