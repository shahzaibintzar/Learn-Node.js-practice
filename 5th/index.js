// console.log('shahzaib')
// console.log(process)
// console.log(process.argv[3])

//////

// const fs = require('fs')

// const input = process.argv;

// fs.writeFileSync(input[2],input[3])


/////


const fs = require('fs')

const input = process.argv;
if(input[2] == 'add')
    {
        fs.writeFileSync(input[3],input[4])
    }else if(input[2] == 'remove')
{
fs.unlinkSync(input[3]);
}
else{
    console.log('invalid input')
}


// PS E:\New folder\Node js\5th> node index.js add ello.txt 'this is a Hello File'
// PS E:\New folder\Node js\5th> node index.js remove hello.txt
// PS E:\New folder\Node js\5th> node index.js remove ello.txt 
// PS E:\New folder\Node js\5th> node index.js sdfg THIS IS a test