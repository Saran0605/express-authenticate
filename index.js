const express = require("express");
require('./mongo');
const todo = require('./route');
const app = express();
const port = 3000;
app.use(express.json());
app.use('/todo',todo);
app.listen(port,()=>{
    console.log("serve started");
});