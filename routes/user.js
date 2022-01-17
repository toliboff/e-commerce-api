const router = require("express").Router()

router.get("/usertest", (req, res)=>{
  res.send('user test is successfull')
})

router.post("/usertest", (req, res)=>{
  const username = req.body.username

  res.send(username)
})

module.exports = router;