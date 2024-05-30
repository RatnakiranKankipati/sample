const express = require("express")
const app=express();
const port = process.env.PORT || 8000

app.get("/",async(req,res)=>{
res.send({msg:"success"})
})

app.get("/get/user",async(req,res)=>{
    try{
        res.send(
            {
                status:"success",
                msg:"working fine"
            }
        )
    }catch(err){
        console.log("error");
    }

})
app.get("/get/new",async(req,res)=>{
    try{
        res.send(
            {
                status:"success",
                msg:"fine"
            }
        )
    }catch(err){
        console.log("error");
    }

})
// hello
app.listen(port,()=>{
    console.log("server runing on port 8000");
})