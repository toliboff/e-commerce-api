const router = require("express").Router();
const CryptoJS = require("crypto-js");
const { verifyTokenAndAdmin, verifyTokenAndAuthorisation } = require("./verifyToken");
const User = require("../models/User");

// UPDATE
router.put("/:id", verifyTokenAndAuthorisation, async (req, res)=>{
  if (req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorisation, async (req, res)=>{
  try {
   await User.findByIdAndDelete(req.params.id);
   res.send(200).json("User has been deleted");
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
  try {
   const user = await User.findById(req.params.id);
   const { password, ...others } = user._doc;
   res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;