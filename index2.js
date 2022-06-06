#!/usr/bin/env node
const fs = require('fs');
const process = require('process');
const utils = require('util');
const chalk = require('chalk');
const curr = process.cwd();


const lstat2 = utils.promisify(fs.stat);

const {lstat} = fs.promises;
console.log(lstat)

fs.readdir(curr, async (err, filenames) =>{
    if(err)
        console.log(err);
    
    const statPromises = filenames.map(filename =>{
        return lstat(filename);
    })

    const allStatss = await Promise.all(statPromises)

    for(let stats of allStatss){
        const index = allStatss.indexOf(stats)

        if(stats.isFile())
        
        console.log(chalk.red(filenames[index]), stats.isFile());
        else
        console.log(filenames[index], stats.isFile());
    }
    // for(let filename of filenames){
    //     try{
    //     const stats = await lstat2(filename);

    //     console.log(filename, stats.isFile())
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }

    //2nd option
    // const allStats = Array(filenames.length).fill(null);
    // for(let filename of filenames){
    //     const index = filenames.indexOf(filename);
    //     fs.lstat(filename,(err, stats) =>{
    //         if(err)
    //             console.log(err)
        
    //         allStats[index] = stats;

    //         let ready = allStats.every(stats =>{
    //             return stats;
    //         })

    //         if(ready){
    //             allStats.forEach((stats,index) =>{
    //                 console(filenames[index], stats.isFile());
    //             })
    //         }
    //     })
    // }
});

const lstat3 = (filename) =>{
    return new Promise((resolve, reject) =>{
        fs.lstat(filename,(err,stat)=>{
            if(err)
                reject(err)
            
            resolve(stat);
        })
    })
}