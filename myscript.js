const message = 'hello';
module.exports = message;

let counter = 0;
const counterObject = {
    increment(){
        counter=counter+1;
    },
    getcounter(){
        return counter;
    }
}
module.exports = counterObject;