console.log('hi')
const setting  = require('./myscript.js')
console.log(setting);

const counterObject = require('./myscript.js')

console.log(counterObject.getcounter())
counterObject.increment();
console.log(counterObject.getcounter());