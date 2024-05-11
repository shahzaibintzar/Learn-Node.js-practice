const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const app = express();



app.set('view engine','ejs')
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/profile', (req, res) => {
    const user ={
        name: 'shahzaib',
        email: 'shahzaib@gmail.com',
        city: 'faisalabad',
        skills: ['html', 'javascript', 'css','react', 'node.js' ]
    }
    res.render('profile.ejs',{user})
})


app.get('/login',(req,res) => {
 res.render('login');
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/home', (req, res) => {
    res.sendFile(`${publicPath}/home.html`);
})
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
})
app.listen(4000)
