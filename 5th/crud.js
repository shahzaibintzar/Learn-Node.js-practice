const fs = require('fs');

const path = require('path');

const dirpath = path.join(__dirname,'crud')

const filepath = `${dirpath}/apple.txt`


//                  write the file

// fs.writeFileSync(filepath, 'this is a simple test')

//                  read the file

// fs.readFile(filepath,'utf8',(err,item)=>{
// console.log(item)
// })

//                  update / append the file

// fs.appendFile(filepath, 'this is the name of the test', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file updated')
//     }
// } )


//                  rename the file

// fs.rename(filepath,`${dirpath}/froute.txt`,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file renamed successfully')
//     }
// } )



//                  delete the file

fs.unlinkSync(`${dirpath}/froute.txt`)