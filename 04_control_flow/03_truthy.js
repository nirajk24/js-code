const userEmail = "user@gmail.com"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 // 5
val2 = null ?? 10 // 10
val3 = undefined ?? 20  // 20

console.log(val3);