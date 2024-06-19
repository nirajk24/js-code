const promiseOne = new Promise(function(resolve, reject){
    // Do some work, db call, api call
    setTimeout(() => {
        console.log("Async task 1");
        resolve();
    }, 1000);
})

promiseOne.then(function() {
    console.log("Promise 1 Consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Promise 2 consumed");
})

// Send data with resolve
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 3");
        resolve({username: "Niraj", email: "niraj@example.com"});
    }, 1000);
}).then((data) => {
    console.log(data);
})



// Error
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 4");
        let error = false;
        if(!error){
            resolve({username: "Niraj", email: "niraj@example.com"});
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})

promiseFour.then(function(data) {
    console.log(data);
    return data.username;
}).then(function(username) { // Chaining
    console.log(username);
}).catch(function(err) {
    console.log(err);
}).finally(function() {
    console.log("Promise 4 is done");
})



// Async Await
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 5");
        let error = true;
        if(!error){
            resolve({username: "Niraj", password: "123"});
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




// Fetch
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// Fetch with then catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))