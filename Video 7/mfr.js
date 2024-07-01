let arr = [1, 13, 5, 7, 11];
//map loop
let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2)
}
//it is the another way of doing the above is mapping

let newArr1 = arr.map((e, index, array) => {
    return e ** 2//e is for the element/value is the var that acts as a loop fun for the all the elements of the array
})
console.log(newArr1);
//filter loop

const greaterThanSeven = (value) => {
    if (value > 7) {
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))

//reduce method-reduces an array to single value
let arr2 = [1, 2, 3, 4, 5]

const red = (a, b) => {
    return a + b
}
console.log(arr2.reduce(red))

Array.from("Parthvi")