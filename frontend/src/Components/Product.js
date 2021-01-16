import { Link } from 'react-router-dom';
import './Product.css';
const Product = ({imageUrl,name,price,description,productId}) =>{
    return (
        <div className="product">
            <img src={imageUrl} alt ={name}></img>
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">
                {description.substring(0,100)}...
                </p>
                <p className="info__price">Rs.{price}</p>
                <Link to={`/products/${productId}`} className="info__button">View</Link>
            </div>
        </div>
    )
}
export default Product