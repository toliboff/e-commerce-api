const router = require("express").Router()
const User = require("../models/User");

router.post("/register", (req, res) =>{
  const newUser = newUser({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  
})
module.exports = router;