
const express = require("express");
const app = express();
exports.app = app;
const PORT = 3000;

app.use("express",(req, res)=>{
  return res.json({status : "The server is running "})
});

app.use("express", (req, res)=>{
  req.json({email,
    username,
    password
  })
app.get("/", (req, res) =>{
  if(!email){
    return res.json({status : "Email cannot be empty."});

  }
  if(!username){
    return res.json({status :"Username cannot be empty."});

  }
  else if(password.length() < 8 || password.length() >16){
   return res.json({status : "The password length should be greater than 8 or less than or equal to 16"})
  }
 })

});
app.listen(PORT, ()=>{
  console.log(`The port is running in ${PORT}`);
})