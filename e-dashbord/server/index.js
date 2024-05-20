

//                                 simple data get mongoDb in one file

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// require("dotenv").config()

// const connectDB = async ()=>{
// mongoose.connect(process.env.DATABASE);
// const productsSchema = new mongoose.Schema({});
// const productsModel =  mongoose.model('users', productsSchema);
// const data = await productsModel.find();
// console.log(data);
// }
// connectDB();
// app.listen(4000)



//                                   MongoDB connect server using config file




const express = require('express');
const User = require('./db/user');
require('./db/config');
const app = express();

app.use(express.json());
app.post("/register",async (req,res)=>{
  const user = new User(req.body)
  const result = await user.save();
res.send(result);
})
app.listen(4000)