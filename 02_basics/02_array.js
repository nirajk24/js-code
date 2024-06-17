const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);


// Spread oeprator ...
const allnewHeros = [...marvelHeros, ...dcHeros]
console.log(allnewHeros);


// Flat Array
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]], 13, 14]

const flatArray = anotherArray.flat(Infinity)

console.log(anotherArray);
console.log(flatArray);