import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/User.js'
import cookieParser from 'cookie-parser';
//initializing express
const app = express();

// dovenv config
dotenv.config();


 
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

app.use("/api/users", userRoutes); 
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something Went Wrong!";
    return res.status(status).json({
        success : false,
        message, 
        status, 

    }) 
})


app.listen(8800, ()=>{  
    console.log('app server running on port 8800....')
})
