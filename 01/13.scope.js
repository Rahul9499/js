
//  let a = 450 

// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a);
// }
 
//  console.log(a);
// console.log(b);


function one(){
    const username = "rahul"

    function two(){
        const web = "Git"
       console.log(username);
    }
    //console.log(web);

two()
}
one()


console.log(addone(8));
function addone(num){
    return num + 1
}

console.log(addTwo(8)); //Hoisting (due to this it can not be executed in fn expression)
const addTwo = function(num){
    return num +2
}
