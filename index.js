const express=require('express')
const carRoutes=require('./routes/car')
const userRoutes=require('./routes/user')
const bookingRoutes=require('./routes/rental')
const connectDB=require('./config/dbConfig')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const PORT=process.env.PORT || 5000
// Connect to MongoDB
connectDB();

app.use(cosrs())
app.use(express.json())
app.use('/api/cars',carRoutes)
app.use('/api/users',userRoutes)
app.use('/api/bookings',bookingRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
