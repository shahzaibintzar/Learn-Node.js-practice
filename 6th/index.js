const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('get data for req method', req.query.name)
  res.send(`<h1>Hello World!</h1> 
  <a href='/about'>Go to About page</a>
  <a href='/contect'>Go to Contect page</a>
  `);
});
app.get('/about', (req, res) => {
  res.send(`
  <input type="text" placeholder="Enter Your name" value="${req.query.name}" />
  `);
});
app.get('/contect', (req, res) => {
  res.send(
   [ {
    name: 'Mohammad',
    age: 20,
    job: 'developer'
  },
  {
    name: 'Ali',
    age: 24,
    job: 'developer'
  },
  {
    name: 'Ahmed',
    age: 22,
    job: 'developer'
  }]
)});


app.listen(4000);


//////////////////    class 20


