// function myName(){
//     console.log("R");
//     console.log("A");
//     console.log("H");
//     console.log("U");
//     console.log("L");
// }
// myName();

// function add(num1, num2){
//     let result = num1 + num2;
//     return result;
// }
// const result = add(3,7)
// console.log("Result: ", result);

function loginUser(username = "rahul"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("Anand"));