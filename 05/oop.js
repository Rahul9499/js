const user = {
    username: "rahul anand",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`this.username`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }

    return this
}

const userOne = new User("rahul", 25, true)
const userTwo = new User("Kumar", 58, false)
console.log(userOne.constructor);
// console.log(userTwo);