const express = require('express');

const app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    next();
});

app.use("/data",(req,res,next)=>{
    res.send('Data from Node');
    res.status(200);
});

module.exports = app;