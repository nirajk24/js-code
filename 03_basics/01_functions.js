function sayMyName(){
    console.log('N')
    console.log('I')
    console.log('R')
    console.log('A')
    console.log('J')
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")

function subTwoNumber(number1, number2){
    let res = number1 - number2
    return res
}

// Rest operator
function calculateCartPrice(num1, num2, ...num3){
    return num3
}

console.log(calculateCartPrice(100, 200, 300, 400));