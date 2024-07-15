const express = require("express");
const router = express.Router();
const {registerUser, userLogin} = require("../controllers/authController");

router.get("/", (req, res)=>{
  res.send("hey it's working.");
})

router.post("/register", registerUser );
router.post("/login", userLogin);

module.exports = router;