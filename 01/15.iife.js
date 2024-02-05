//immediately invoked fn exp

(function abc(){
    console.log("DB connection");
})();

( (name) => {
    console.log(`DB connection 2 ${name}`);
})("Rahul")