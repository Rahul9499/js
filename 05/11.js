function outer(){
    let username = "hitesh"
    function inner(){
       console.log("inner", username);
    }
    inner()
}
outer()
console.log("Too Outer", username);