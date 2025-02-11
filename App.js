const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/database')
const studentRoutes=require('./routes/studentRoutes')
 
dotenv.config()
const app = express()
const PORT=process.env.PORT || 3000
connectDB()

app.use(express.json())
app.use('/api',studentRoutes)
 app.listen(PORT,()=>{
    console.log(`server running : http://localhost:${PORT}`)
 })