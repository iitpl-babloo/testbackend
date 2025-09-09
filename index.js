import express from  'express'
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js';


const app = express();
connectDB();

app.use("/",userRouter)
app.get("/api/hello",(req,res)=>{
    res.send("hello word")
})


app.listen(5000,()=>{
    console.log('server is runnnin  port 5000 ')
})