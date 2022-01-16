const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://toliboff:parol2021@cluster0.iqhjv.mongodb.net/Projet0?retryWrites=true&w=majority").then(()=>console.log('Connection success'));

const app = express();

app.listen(5000, ()=>{
  console.log("Backend server is running");
})