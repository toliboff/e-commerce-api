const express = require("express");
const mongoose = require("mongoose");
const dotenv  = require("dotenv");
const app = express();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB connection successfull!'))
.catch(e=>console.log(e))

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.get('/api/test', (req, res)=>{
  res.send("TEst test test");
})


app.listen(process.env.PORT || 5000, ()=>{
  console.log("Backend server is running");
})