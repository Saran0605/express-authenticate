const express = require("express");
require('./mongo');
const todo = require('./route');
const app = express();
const port = 3000;
app.use(express.json());
app.use('/', (req, res) => {
  res.send('Hello from Express inside Docker!');
});
app.use('/todo',todo);
app.use('/hello',async(req,res)=>{
    res.send("Hi Prettt");
})
app.listen(port,()=>{
    console.log("serve started");
});
