//                                 first class
// console.log('first')
// var a = 12;
// let b = 20;
// const c = 30;
// console.warn(a+b+c)
//                                 2end class

// var x='20';
// if(x==20)
// {
// console.log("matched")
// }

// var x='20';
// if(x===20)
// {
// console.log("matched")
// }

const app = require("./app")

console.log(app);
console.log(app.y);
console.log(app.x);
console.log(app.z());

// var x='20';
// for(i=0;i<=10;i++)
// {
// console.log(i);
// }


const arr=[2,4,7,1,3,8,3];
let result =arr.filter((item)=>{
return item=== 3
// item=>3
})
console.warn(result)