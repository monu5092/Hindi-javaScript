// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// To remove the pollution of global scope we use iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Monu')