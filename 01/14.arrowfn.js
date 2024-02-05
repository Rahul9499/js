const user = {
    username: "Rahul",
    price: 199,

    welcomeMessage: function() {
    console.log(`${this.username} , welcome to website `);
    }
}

// user.welcomeMessage()
// user.username = "anand"
// user.welcomeMessage()

// console.log(this);

// function one(){
//    let  username = "Raj"
//     console.log(this.username)
// }
// one()


// const one = () => {
//    let  username = "Raj"
//     console.log(this.username)
// }
// one()


// const add = (num1, num2) => {
//    return num1 + num2
// }

// const add = (num1, num2) =>  num1 + num2

const add = (num1, num2) =>  (num1 + num2)

console.log(add(5,8));