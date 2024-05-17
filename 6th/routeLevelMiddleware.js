const express = require('express');
const reqFilter = require("./separateMiddleware")
const route = express.Router();

const app = express();


route.use(reqFilter);

app.get('/',reqFilter, (req, res) => {
  res.send('Hello World! Home');
});
route.get('/users', (req, res) => {
  res.send('Hello World! Users');
});
route.get('/about', (req, res) => {
  res.send('Hello World! about');
});
app.get('/contect', (req, res) => {
  res.send('Hello World! Contect');
});



app.use('/',route)
app.listen(4000)