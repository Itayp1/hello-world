const express = require("express")
const app = express()



app.get("*",(req , res)=>{
    return res.json("hello world itayp the king!!");
})


app.listen(3000 , ()=>{
    console.log("listen on port 3000")
})