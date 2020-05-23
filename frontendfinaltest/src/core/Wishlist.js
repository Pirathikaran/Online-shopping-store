import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getWishList } from "./wishlistHelper";
import Card from "./Card";
import HomeCard from "./HomeCard";
import Body from "./Body";


const Wishlist = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getWishList());
    }, [items]);

    const showItems = items => {
        return (
            <div >
                <h2>Your Wishlist has {`${items.length}`} items</h2>
                <hr />
               
                <div>
                <div className="col ">
                    <div className="row m-2">
                    {items.map((product, i) => (
                    <HomeCard
                        key={i}
                        product={product}
                        showAddToCartButton={true}
                        showAddToWishListButton={false}
                        cartUpdate={false}
                        showRemoveProductButton={false}
                        wishlistshowRemoveProductButton={true}
                    />
                ))}
                    </div>
        </div>
                </div>
               
                
               
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your Wishlist is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title="Shopping WishList"
            description="Manage your wishList items. Add remove checkout or continue shopping."
            className="container"
        >
             <div className="mb-3 m-1">
        <Body/>
        </div>
                <div className="col-sm-12 ">
                <div className="row m-10">
            
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>
                    </div>
        </Layout>
    );
};

export default Wishlist;

