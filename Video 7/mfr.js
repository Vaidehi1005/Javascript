let arr = [1, 13, 5, 7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)
// }
//it is the another way of doing the above is mapping

let newArr = arr.map((e, index, array) => {
    return e ** 2//e is for the element/value is the var that acts as a loop fun for the all the elements of the array
})
console.log(newArr);

newArr.filter