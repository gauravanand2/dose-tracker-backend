import express from "express";

const app :express.Application =express();

const port:number = 3001

app.get('/',(req,res)=>{
    res.send("Type");
});

app.listen(port,()=>{
    console.log("aaa");
});
