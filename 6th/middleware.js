const express = require('express');

const app = express();



const reqFilter = (req, res, next) =>{
    if(!req.query.age)
    {
        res.send('Please provide age')
    }
    else if(req.query.age < 18)
    {
        res.send("you can not access this page")
    }
    else
    {
        next();
    }

}
app.use(reqFilter)
app.get('/', (req, res) => {
  res.send('Hello World! Home');
});
app.get('/users', (req, res) => {
  res.send('Hello World! Users');
});
app.get('/contect', (req, res) => {
  res.send('Hello World! Contect');
});

app.listen(4000)