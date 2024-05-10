let a = 20;
let b = 10;

//              one time execut in 2 sec
// setTimeout(()=>{
//     b = 30
// },2000)


//                 always run in 2 sec
// setInterval(() => {
//     console.log('first')
// }, 2000);

// console.log(a+b)



//////////////////////////////

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

waitingData.then((data) => {
    b = data
    console.log(a+b)
})