console.log("This is string tutorial");
let a = "Vaidehi";//this a var has string bcoz it have a double quotes and the collection of characters are called string and it is always written in " ".
console.log(a);//it is printing the whole string.
console.log(a[0]);//it access 1st char 
console.log(a[1]);//it access 2st char 
console.log(a[2]);//it access 3st char 
console.log(a[3]);//it access 4st char 
console.log(a[4]);//it access 5st char 
console.log(a[5]);//it access 6st char 
console.log(a[6]);//it access 7st char 
// console.log(a[7]); 
console.log(a.length);// for length

let real_name = "Vaidu";//realname naam no var che e vaidu che
let friend = "Freya";//friend naam no var che e freya che
console.log("Her name is " + real_name + " and her bestfriend name is " + friend);//to print the both var 
//template literals is for writing in the simple way not to write like above hectic way 
console.log(`Her name is ${real_name} and her bestfriend name is ${friend} `);//single interplotation

let b="Shivam";
console.log(b.toUpperCase());//uppercase mate
console.log(b.toLowerCase());//lowercase mate
console.log(b.length);//length mate
console.log(b.slice(1,4));//slice means index 1 thi aapse word ane 4 pela sudhi 
console.log(b.slice(1,5));//1 thi start thase 5 pela
console.log(b.slice(1));// 1 thi last sudhi
console.log(b.replace("Sh","10"))//hamesha first sh j replace thase bijo sh replace nai thai 
console.log(b.concat(a,"Nayakpura","Rahul","Priya"))//string join karse badha ne
console.log(b)//strings are immutable