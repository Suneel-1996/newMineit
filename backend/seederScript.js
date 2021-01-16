require('dotenv').config()
const productsData=require('./data/Products')
const connectDB=require('./config/mongoDB')
const Product=require('./models/Product')
connectDB();
const importData=async () =>{
    try {
        await Product.deleteMany({})
        await Product.insertMany(productsData)
        console.log('Data Import complete')
        process.exit(0)
    } catch (error) {
        console.log('Error with data import')
        process.exit(1)
    }
}
importData()