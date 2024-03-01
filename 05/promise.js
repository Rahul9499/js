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