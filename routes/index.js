const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();

router.get("/", (req, res)=>{
  let error = req.flash("error")
  res.render("index", {error})
})

router.get("/shop", isLoggedIn, (req,res)=>{
  res.render("shop");
})

router.get("/logout", isLoggedIn, (req, res)=>{
  res.redirect("/")
})

module.exports = router