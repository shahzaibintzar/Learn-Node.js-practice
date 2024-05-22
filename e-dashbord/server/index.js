

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
const Product = require('./db/Product');
const cors = require('cors');

require('./db/config');
const app = express();
app.use(cors()); 


app.use(express.json());
app.post("/register",async (req,res)=>{
  const user = new User(req.body)
  const result = await user.save();
  // result = result.toObject();
  // delete result.password
res.send(result);
})



app.post('/login',async (req,res)=>{
  if(req.body.email && req.body.password)
    {
      let user = await User.findOne(req.body).select('-password')
      if(user){
        res.send(user)
      }else{
        res.status(404).send('user not found')
      }
    }else{
      res.status(404).send('user Data Missing')
    }
})


app.post('/addProduct', async (req, res) =>{
  const product = new Product(req.body);
  const result = await product.save();
  res.send(result);
})


app.get('/products', async (req, res) =>{
  const products = await Product.find();
  if(products.length>0){
    res.send(products);
  }else{
    res.status(404).send('No Products Found')
  }
})


app.delete('/product/:id',async(req, res) => {
  // res.send(req.params.id)
  const result = await Product.deleteOne({_id: req.params.id})
  res.send(result)
})


app.get('/product/:id', async (req, res) => {
let result = await Product.findOne({_id: req.params.id})
  if(result){
    res.send(result)
  }else{
    res.status(404).send('No Products Found')
  }
})



app.put('/product/:id',async (req, res) => {
  let result = await Product.updateOne(
    {_id:req.params.id},
  {
    $set:req.body
  })
  res.send(result)
});


app.get('/search/:key', async (req, res)=> {
  let result = await Product.find({
    "$or": [
      { "name": { "$regex": req.params.key } },
      { "category": { "$regex": req.params.key } },
      { "company": { "$regex": req.params.key } }
    ]
  });
  res.send(result)
})



app.listen(4000)