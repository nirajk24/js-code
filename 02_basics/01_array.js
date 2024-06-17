let myArr = [1, 2, 3, 4, 5, 6]

let myAnotherArray = new Array(1, 2, 3, 4, 5, 6, 7, 8)

console.log(myArr);

myArr.push(7)
myArr.push(8)
myArr.pop()

console.log(myArr);

myArr.unshift(10) // Push value at start
console.log(myArr);

myArr.shift() // Remove value from start
console.log(myArr);


console.log(myArr.includes(4)) // true
console.log(myArr.indexOf(9)) // -1 for not available

// join - turns array into string
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)


// Slice, Splice
// Slice - Doesn't change original array and excludes last value
// Splice - Change original array and includes last range

let arr = [1,2,3,4,5,6,7,8]
console.log("A" , arr)

let m1 = arr.slice(1, 3)
console.log(m1);
console.log("B" , arr)

let m2 = arr.splice(1, 3)
console.log(m2);
console.log("B" , arr)