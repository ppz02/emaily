const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send({ hi : "Implementing full stack app"});
});

const PORT = process.env.PORT || 5000; 

app.listen(PORT);