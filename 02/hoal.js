// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "hello worlds!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('UK', "Uttarakhand")
// map.set('Fr', "france")

// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

//object is not iterable in map


// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     py: 'Python'
// }
// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// const programming = ["js", "java", "py", "c++", "rb"]

// for (const key in programming) {
//     console.log(programming[key]);
// }



//  const coding = ["js", "java", "python", "c++", "ruby","reactjs"]

// coding.forEach(  function (val){
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "jv"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})