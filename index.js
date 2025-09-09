import express from  'express'
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.routes.js';


const app = express();
connectDB();

app.use("/",userRouter)
app.get("/api",(req,res)=>{
    res.send("hello babloo")
})

app.get("/api/user",(req,res)=>{
    res.send("hello user")
})


// Routes
app.use("/api/auth", authRouter);

app.listen(5000,()=>{
    console.log('server is runnnin  port 5000 ')
})