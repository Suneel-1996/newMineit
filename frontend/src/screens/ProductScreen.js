import './ProductScreen.css'
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {getProductDetials} from '../actions/productActions'
import {addToCart} from '../actions/cartActions'
import Product from '../Components/Product'


const ProductScreen=({match,history})=>{
    const [qty,setQty]=useState(1);
    const dispatch=useDispatch()
    
    const productDetails=useSelector((state)=>state.getProductDetails)
    const {loading,error,product}=productDetails;
    useEffect(()=>{
        if(product && match.params.id!==product._id){
            dispatch(getProductDetials(match.params.id))
        }
    },[dispatch,product,match])

    const addToCartHandler=() =>{
        dispatch(addToCart(product._id,qty))
        history.push('/cart')
    }
    return(
        <div className="productscreen">
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
                <>
                <div className="productscreen__left">
                <div className="left__image">
                    <img src={product.imageUrl} alt={product.name}></img>

                </div>
                <div className="left__info">
                    <p className="left__name">{product.name}</p>
                    <p>Price: {Number(product.price)*80}/-</p>
                    <p>{product.description}</p>

                </div>


            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price : <span>{Number(product.price)*80}</span>
                    </p>
                    <p>
                        Status: <span>{product.countInStock > 0 ? "In Stock"
                    : "Out of stock"    
                    }</span>
                    </p>
                    <p>
                        Quantity
                        <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x)=>(
                                <option key= {x+1} value={x+1}>{x+1}</option>
                            ))}
                            

                        </select>
                        
                    </p>
                    <p>
                        <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                    </p>

                </div>
            </div>
            </>
            )}
            
        </div>
    )
}

export default ProductScreen