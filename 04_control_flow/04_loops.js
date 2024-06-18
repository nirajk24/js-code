// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// For of
const arr = [1, 2, 4, 6, 8]
for(const num of arr){
    console.log(num&1);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for(const [key, value] of map){
    console.log(key);
}


// Objects
const myObject = {
    cpp: "C++",
    js: "javaScript",
    kt: "Kotlin",
    rb: "ruby"
}

for(const key in myObject) {
    console.log(myObject[key]);
}

// For Each
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Kotlin",
        languageFileName: "kt"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} : ${item.languageFileName}`)
})



