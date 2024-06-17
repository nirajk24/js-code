let score = "33"

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber)

// string will give NaN
// null will give 0
// undefined will give NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 40
let someString = String(someNumber)

console.log(someString)
console.log(typeof(someString))


// Operations

let value = 3
let negValue = -value
console.log(negValue)

// power = 2*3
// divide = 2/3
// mod = 2%3

let str1 = "hello"
let str2 = " world"

let str = str1 + str2
console.log(str)

console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32