const user = {
    username: "Rahul",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and 
    price is ${anyobject.price}`);
}

handleObject(user)


const newArray = [100, 200, 300, 400];

function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(newArray));
console.log(returnsecondvalue([200, 500, 100, 2000]));