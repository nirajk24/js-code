// Immediately Invoked Function Expression (IIFE)

(function doSomething(){
    console.log(`DB CONNECTED`)
})(); // Need semi colon here to end it

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Niraj");