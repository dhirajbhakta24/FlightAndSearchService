const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config/server.config');

const app = express();

app.get('/ping',(req,res)=>{
    return res.json({
        message:'flight and Search service is alive'
    });
});
app.use(bodyParser.json);
app.use(bodyParser.text);
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,() =>{
    console.log(`Server Started at PORT : ${PORT}`);
});    
