import './CartScreen.css'
import CartItem from '../Components/CartItem'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
const CartScreen=()=>{
    const dispatch =useDispatch();
    const cart =useSelector((state)=>state.cart)
    const {cartItems}=cart;

    const qtyChangeHandler=(id,qty)=>{
        dispatch(addToCart(id,qty))
    }
    const removeHandler=(id)=>{
        dispatch(removeFromCart(id))
    }
    const getCartCount=()=>{
        return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }
    const getCartSubTotal=()=>{
        return cartItems.reduce((price,item)=>(Number(item.price)*Number(item.qty))+price,0)
    }
    return(
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length===0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>

                ) : (cartItems.map((item)=><CartItem key={item.product} 
                item={item} 
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
                ></CartItem>))}

            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    {/* <p> ({cartItems.length}) Products</p> */}
                    <p> ({getCartCount()}) Units from ({cartItems.length}) Product Category</p>
                    <p>Rs.{getCartSubTotal().toFixed(2)*80}</p>


                </div>
                <div>
                <button>Proceed to checkout</button>
                </div>
                
                

            </div>
        </div>
    )
}

export default CartScreen