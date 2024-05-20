const express = require('express');
const mongoose = require('mongoose');


const app = express();

const connectDB = async ()=>{
  mongoose.connect('mongodb://localhost:27017/userData');

  const productsSchema =new mongoose.Schema({});

const productsModel =  mongoose.model('users', productsSchema);
const data = await productsModel.find();

console.log(data);

}


connectDB();

app.listen(4000)