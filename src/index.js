const express = require('express');

const app = express();

app.get('/ping',(req,res)=>{
    return res.json({
        message:'flight and Search service is alive'
    });
});

app.listen(PORT,() =>{
    console.log(`Server Started at PORT : ${PORT}`);
});    
