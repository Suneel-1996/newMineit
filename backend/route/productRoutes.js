const express=require('express')
const router=express.Router()
const {getAllProducts,getProductById}=require('../controller/productController')

//get all products from mongo db
//route GET /api/products
router.get('/',getAllProducts)

//get a particular product from mongo db
//rout GET /api/products/:id
router.get('/:id',getProductById)

module.exports=router