//Singleton


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

//const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = { ...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(Object.hasOwnProperty('isLogged'));