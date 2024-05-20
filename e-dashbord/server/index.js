const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = async ()=>{
mongoose.connect('mongodb+srv://TrelloClone:00998877@cluster0.0git2uy.mongodb.net/UserData?retryWrites=true&w=majority&appName=Cluster0');
const productsSchema = new mongoose.Schema({});
const productsModel =  mongoose.model('users', productsSchema);
const data = await productsModel.find();
console.log(data);
}
connectDB();
app.listen(4000)