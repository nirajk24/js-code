const target = {a: 1, b: 2}
const source = {b: 3, c: 4}

const returnedTarget = Object.assign(target, source)

const newReturnedTarget = Object.assign({}, target, source)
// Now {} is the target object and all other are source

console.log(target);
console.log(returnedTarget);

// Spread Operator
const obj1 = {a: 1, b: 2}
const obj2 = {b: 3, c: 4}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))

console.log(obj3.hasOwnProperty('a'));