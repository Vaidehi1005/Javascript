/*Create a business name generator by combining list of adjectives and shop name  and another word
Adjectives:
Crazy
Amazing
Fire
Shop name:
Engine
Foods
Garments
Another Word:
Bros
Limited
Hub
*/
let random = Math.random()
// 0 0.33 0.66 1 (3 intervals ma todi didhu )
let first,second,third;
//Lets generate the first word
if(random<0.33){
 first="Crazy"
}
else if(random<0.66 && random>=0.33){
    first="Amazing"
}
else{
    first="Fire"
}
//Lets generate the second word
if(random<0.33){
    second="Engine"
}
else if(random<0.66 && random>=0.33){
    second="Foods"
}
else{
    second="Garments"
}
//Lets generate the third word
if(random<0.33){
    third="Bros"
}
else if(random<0.66 && random>=0.33){
    third="Limited"
}
else{
    third="Hub"
}
