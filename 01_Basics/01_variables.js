const accountId = 14553
let accountEmail = "saurabhdute@gmail.com"
var accountPassword = "12345"
accountCity = "Gurgaon"

/*
    if value is not given then js will treat as 
    an undefined value with keyword "undefined"
*/ 

let accountState;

// accountId = 2

accountEmail = "saurabh@google.com"
accountPassword ="212121"
accountCity = "varanasi"

// console.log(accountId);
/*
    Prefer not to use var 
    because of block scope and functional issue
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])