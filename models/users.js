const fs = require('fs')
const path = require("path")
const bcrypt = require("bcrypt")
const Filepath = path.join(process.cwd(),"data","users.json")
const readData =()=> {
    return new Promise((resolve,reject)=>{
        fs.readFile(Filepath,(err,data)=>{
            if(err){
                return reject(err)
            }
            resolve(JSON.parse(data.toString()))
        })
    })
}
const writeData =()=> {
    return new Promise((resolve,reject)=>{
        fs.writeFile(Filepath,JSON.stringify(data),(err)=>{
            if(err){
                return reject(err)
            }
            resolve();
        })
    })
}