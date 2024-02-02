//Singleton
//Object literals

const mySym = Symbol["key1"]

const jsUser = {
    name: "Rahul",
    "full name":"Rahul Anand",
    [mySym]: "mykey1",
    age: 26,
    location: "Delhi",
    email: "rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["tuesday", "friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rahul@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "rahul@amazon.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());