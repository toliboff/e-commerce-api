const express = require("express");
const mongoose = require("mongoose");
const dotenv  = require("dotenv");
const app = express();
const userRoute = require('./routes/user')
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB connection successfull!'))
.catch(e=>console.log(e))

app.use(express.json())
app.use('/api/user', userRoute)

app.listen(process.env.PORT || 5000, ()=>{
  console.log("Backend server is running");
})