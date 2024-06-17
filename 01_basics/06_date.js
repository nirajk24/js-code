let mydate = new Date()

console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


// TimeStamp

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(mydate.getTime())