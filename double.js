const { Global } = require("@emotion/react");

const dbl = (n) => n * 2;

//console.log ("Hello, World",(dbl(10)));


// console.log(global);
//console.log(dbl(10));
// console.log(process.argv);  // Argument value
// console.log(dbl(process.argv[2]));


const[, , num] = process.argv;
console.log(dbl(num));

