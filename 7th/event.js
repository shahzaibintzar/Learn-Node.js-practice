const express = require('express');
const EventEmitter = require('events')

const app = express();


const event = new EventEmitter();

let count = 0;
event.on("count API" , ()=>{
    count++;
    console.log("event called",count);
})
app.get('/', (req, res) => {
    res.send('Hello World! home')
    event.emit('home API')
});
app.get('/search', (req, res) => {
    res.send('Hello World! search')
    event.emit('search API')
});
app.get('/update', (req, res) => {
    res.send('Hello World! update')
    event.emit('count API')
});

app.listen(5000);