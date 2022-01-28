const router = require("express").Router();
const CryptoJS = require("crypto-js");
const { verifyTokenAndAdmin, verifyTokenAndAuthorisation } = require("./verifyToken");
const Cart = require("../models/Cart");

// CREATE
router.post("/", verifyTokenAndAuthorisation, async (req, res)=>{
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE
router.put("/:id", verifyTokenAndAuthorisation, async (req, res)=>{

  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})
    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorisation, async (req, res)=>{
  try {
   await Cart.findByIdAndDelete(req.params.id);
   res.send(200).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET USERCART
router.get("/find/:userId", verifyTokenAndAuthorisation, async (req, res)=>{
  try {
   const cart = await Cart.findByOne({userId: req.params.userId});
   res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error)
  }
});

// GET ALL
router.get("/", verifyTokenAndAdmin ,async (req, res)=>{
  
  try {
    const carts= await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;