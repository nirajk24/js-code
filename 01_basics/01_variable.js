const accountId = 14453
let accountEmail = "niraj@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // Don't use this
let accountState

// accountId = 2 // Not allowed

accountEmail = "niraj@yahoo.com"
accountPassword = "2134676"
accountCity = "Bengluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/