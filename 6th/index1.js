const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const app = express();


// console.log('publicPath', publicPath)
app.use(express.static(publicPath))
app.listen(4000)
