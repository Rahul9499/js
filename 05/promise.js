// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rahul", email: "rahul@gmail.com"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
})