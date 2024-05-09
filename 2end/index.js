const fs= require('fs');
console.log("create file");
fs.writeFileSync("hello.txt","content of file")




console.log('-->>', __dirname)
console.log('-->>', __filename)