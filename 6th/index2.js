const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
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
