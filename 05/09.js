class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
     this._email = value
    }
    get password(){
        return `${this._password}rahul`
    }

    set password(value){
        this._password = value
    }
}

const rahul = new User("rahul@gmail.ai", "abd")
console.log(rahul.password);
console.log(rahul.email);
















// function User(email, password){
//     this.email = email;
//     this.password = password

//     Object.defineProperty(this, 'email', {

//     })
// }


// const chai = new User("chai@gmail.com", "chai")

// console.log(chai.email);