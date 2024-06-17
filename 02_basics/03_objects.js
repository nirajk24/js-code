// Singleton

// Object literals
const jsUser = {
    name: "Niraj",
    age: 19,
    location: "Kerala",
    email: "niraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Friday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

jsUser.email = "niraj@gmail.com"
console.log(jsUser);

// Object.freeze(jsUser); // Now any change won't be propogated, Can't unfreeze it 
jsUser.email = "niraj@hahahaha.com"
console.log(jsUser);

// Add function
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
