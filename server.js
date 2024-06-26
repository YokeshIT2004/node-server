require("dotenv").config();
const express = require('express');
const app = express();


app.get('/' , (req , res) => {
    res.send("This is message from the server");
})

app.get('/home' , (req , res) => {
    console.log(req.url);

    res.send("This is the Home page");
})





const PORT = process.env.PORT || 3000
// http://localhost:8000/

app.listen(PORT , ()=>{
    console.log(`The Server is Running on ${PORT}.`)
})
