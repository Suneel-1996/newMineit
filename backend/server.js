require('dotenv').config()
const express = require('express')
const connectDB=require('./config/mongoDB')
const productRoutes=require('./route/productRoutes')
connectDB()
const app =express();
app.use(express.json())
app.use('/api/products',productRoutes)
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
