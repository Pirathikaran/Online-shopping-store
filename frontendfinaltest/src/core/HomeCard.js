import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import { addItemWL, removeItemWL } from "./wishlistHelper";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    showAddToWishListButton=true,
    cartUpdate = false,
    wishlistshowRemoveProductButton = false,
    showRemoveProductButton = false
}) => {
    const [redirect, setRedirect] = useState(false);
    const [redirectwl, setRedirectWL] = useState(false);

    const [count, setCount] = useState(product.count);

    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        View Product
                    </button>
                </Link>
            )
        );
    };

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true);
        });
    };
    const addToWishList = () => {
        addItemWL(product, () => {
            setRedirectWL(false);
        });
    };

    const shouldRedirectWL = redirectwl => {
        if (redirectwl) {
            return <Redirect to="/wishlist" />;
        }
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToWishList = showAddToWishListButton => {
        return (
            showAddToWishListButton && (
                <button 
                    onClick={addToWishList}
                    className="btn btn btn-outline-success m-2 "
                >
                 wishlist
                    <AiOutlineHeart/>
                </button>
            )
        );
    };

    const showAddToCart = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button
                    onClick={addToCart}
                    className="btn btn-outline-warning mt-2 mb-2"
                >
                    Add to cart
                </button>
            )
        );
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => removeItem(product._id)}
                    className="btn btn-outline-danger m-2"
                >
                    Remove Product
                </button>
            )
        );
    };

    const wishListshowRemoveButton =     wishlistshowRemoveProductButton => {
        return (
            wishlistshowRemoveProductButton && (
                <button
                    onClick={() => removeItemWL(product._id)}
                    className="btn btn-outline-danger m-2"
                >
                    Remove Product
                </button>
            )
        );
    };

    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock</span>
        ) : (
            <span className="badge badge-primary badge-pill">Out of Stock</span>
        );
    };

    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };
 

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Adjust Quantity
                            </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            value={count}
                            onChange={handleChange(product._id)}
                        />
                    </div>
                </div>
            )
        );
    };
 

    return (
        <div className="card" style={{width:350,height:400 ,margin:1}} >
            <div className="card-header name text-center">{product.name}</div>
            <div className="card-body">
                {shouldRedirectWL(redirectwl)}
                {shouldRedirect(redirect)}
                <div className="card-img-top" style={{width:100,height:150}}> 
                <ShowImage  item={product} url="product" />
                </div>
               
               
                <div className="mt-2"> <p className="black-10 m-2">Price ${product.price}</p></div>
               
            

                {showStock(product.quantity)}
                <br />

                {showViewButton(showViewProductButton)}

                {showAddToCart(showAddToCartButton)}
               <div> {showAddToWishList(showAddToWishListButton)}</div>
               

                {showRemoveButton(showRemoveProductButton)}
                {wishListshowRemoveButton(wishlistshowRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}
            </div>
        </div>
    );
};

export default Card;