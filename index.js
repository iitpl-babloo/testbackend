import express from  'express'
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js';


const app = express();
connectDB();

app.use("/",userRouter)
app.get("/api",(req,res)=>{
    res.send("hello babloo")
})



app.listen(5000,()=>{
    console.log('server is runnnin  port 5000 ')
})