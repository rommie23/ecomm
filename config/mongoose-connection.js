const mongoose = require("mongoose");
const debgr = require("debug")("development:mongoose");
const config = require("config")

debgr("hello")
mongoose
.connect(`${config.get("MONGODB_URI")}/bequem`)
.then(()=>{
  debgr("connected");
})
.catch((err)=>{
  debgr(err);
})

module.exports = mongoose.connection;

// how to make variable ======= $env:DEBUG="development:*"