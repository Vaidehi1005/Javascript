// Functions
//functions are used for writing the code with var we dont have to write again we can reuse the code in the fun just by changing the name
function nice(name) {
    console.log("Hey " + name + " I am nice!");
    console.log("Hey " + name + " I am fine!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " you are good at studies!");
}
// nice("Vaidehi");

// nice("Parthvi");

function sum(a, b) {
    // console.log(a+b);//this is the void fun which is not returning any value and just printing the value
    return a + b;//this is for returning the integer value when passing the int value and storing into result and then we will print the result
}
// sum(11,222);

result = sum(22, 10);

console.log("The sum of the number is: ", result);