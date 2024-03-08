class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `125`
    }
}

const rahul = new User("rahul")
// console.log(rahul.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const lappy = new Teacher("hp", "hp@live.in")
// lappy.logMe()
// console.log(lappy.username);
console.log(lappy.createId());
