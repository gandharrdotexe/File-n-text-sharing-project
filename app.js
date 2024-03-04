const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/get-started',(req, res)=>{
    res.render('get-started');
});

app.listen(3000, () => console.log("Running on port 3000"));