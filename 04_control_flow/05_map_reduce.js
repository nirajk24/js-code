// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

console.log(newNums)


// Map - Used to perform some action on each value and return a new ds
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newValues = values.map((num) => num + 2)
console.log(newValues)

// Map can be chained and filter can be too


// Reduce
const initialValue = 0
const arr1 = [1, 2, 3]

const myTotal = arr1.reduce((acc, currval) => {
    return acc + currval
}, 0)

console.log(myTotal)