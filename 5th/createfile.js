const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'files');
// for(i=0;i<5;i++)
//     {
//         fs.writeFileSync(dirpath+"/hello"+i+".txt", "a simple hello world")
//         // fs.writeFileSync(`hello${i}.txt`, "a simple hello world")
//     }



// fs.readdir(dirpath,(err,files)=>{
//     console.warn(files)
// })


fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
})