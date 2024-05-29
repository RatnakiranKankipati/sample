const express = require("express")
const app=express();


app.get("/",async(req,res)=>{
res.send({msg:"success"})
})
// hello
app.listen(8000,()=>{
    console.log("server runing on port 8000");
})