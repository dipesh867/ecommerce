const express=require('express');
const cors=require('cors');

const app=express();
const PORT=process.env.PORT||5000;

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get("/api/data",(req,res)=>{
    res.json({message:"this is data from server"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})