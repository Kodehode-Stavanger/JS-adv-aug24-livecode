// High order functions

// Callback functions

//Named callback

function myFunc(callback) {   
    callback("this is my parameter")
}

function logger(param) {
    console.log(param)
}

// myFunc(logger)

//Anonymous callback function

// myFunc(function (str){
//     console.log(str)
// })

// myFunc((str) => {
//     console.log(str)
// })

const fruits = ["Apple", "papaya", "Banana", "Pear", "Peach", "Mango"]

// fruits.forEach((e, i, a) => {
//     console.log(e)
//     console.log(i)
//     console.log(a)
// })

// function fruitLogger (str) {
//     console.log(str)
// }

// map - high order method. viktig.

const newFruits = fruits.map((e) => {
    // const newFruit = `${e}!`
    // return newFruit
    if (e !== "Banana"){
        return "!" + e + "!"
    }

})
console.log(newFruits)

const nums = [6, 2, 88, 1, 54, 123]
// Lag et nytt array med disse verdiene doblet.
// BRUK .MAP!

const doubledNums = nums.map((e) => e * 2)
console.log(nums.map((e) => e * 2))

// const highNums = nums.map((e) => {
//     if (e >= 10) {
//         return e
//     }
// })
// console.log(highNums)


// .map() key points:
// returns a new array. ALWAYS return all elements.

// .filter() - returns a new array. only returns
// elements that pass the filter

const highNums = nums.filter((e) => e >= 10).map((e) => e + 1)
console.log(highNums)

// bruk .filter() på fruits til å filtrere
// kun frukter som er nøyaktig 5 tegn lange.

const fiveFruits = fruits.filter((fruit) => fruit.toUpperCase().startsWith("P"))
console.log(fiveFruits)

// .some() & .every()

console.log(fruits.some((e) => e === "Apple"))
console.log(fruits.every((e) => typeof e === "string"))
console.log(fruits.includes("Apple"))

// .reduce(), .sort()



