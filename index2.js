const fs = require('fs');
const process = require('process')
const curr = process.cwd()
fs.readdir('.', (err, filenames) =>{
//Either
//err === an error o\bject, which is not good
//OR
//err == null, which is good
    if(err){        
        console.log(err);
        return
        throw new Error(err);
    }
    
    console.log(filenames)

});