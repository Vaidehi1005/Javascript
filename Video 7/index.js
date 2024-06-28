/*Arrays are the collection of multiple data types like:
Number,String,Objects,etc.
Arrays are variables which can hold more than one value
array ek var j che and js nodejs thi use karvu hoi to ena thi k web browser thi use kari saku
*/
let arr = [1, 2, 4, 5, 7];
//index= 0,1,2,3,4
arr[0] = 5666;
console.log(arr,typeof arr);
console.log(arr.length)
//arrays are mutable so we can change the array
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

//array methods
console.log(arr.toString());//always string aapane commas ma j male jm k A,P,P,L,E="APPLE"
console.log(arr.join(" and "));//aa array ma je no che ene join karva che and thi to join ma and lakhvanu then e badha no ek bija sathe comma thi nai and thi join thai jase

let a1 =[1,2,3];
let a2 =[4,5,6];
let a3 =[7,8,9 ];
console.log(a1.concat(a2,a3))//a1,a2,a3 same j rese as it is change nai thai
/*
arr.push(22) thi last element ma 22 push thase
arr.pop() thi last element nikadse
arr.shift thi first element nikadse
arr.unshift thi first element ma add thase
delete arr[6] means e 6 index vala ne delete karse but arr ma elements etla j rese je pela thi hata etli memory allocation rese 
just 6th element ma delete thai che so e undefined rese ane e jagya empty rese
concat join thase 2 arrays ne
splice arrays ma insert and delete karva mate use thase  
arr.splice(1,1)
means 1st index thi 1 element replace thase so e nikadi jase and then 
*/ 
 
// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]