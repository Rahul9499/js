// let myName = "rahul   "
// let mySname = "Anand  "

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    hanuman: "super",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.hanuman}`);
    }
}

Object.prototype.rahul = function(){
    console.log(`rahul is present in all objects`);
}

Array.prototype.heyRahul = function(){
    console.log((`rahul is a good boy`));
}

// heroPower.rahul()
// myHeroes.rahul()
// myHeroes.heyRahul()
// heroPower.heyRahul()


//inheritance

const User = {
    name: "rajesh",
    email: "rajesh@gmail.com"
}

const teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

  
//modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "Anand kr"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"raosahab".trueLength()
"IceCream123".trueLength()