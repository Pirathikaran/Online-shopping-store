import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import ProductManagerRoute from "./auth/ProductManagerRoute";

import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import ManagerAddProduct from "./admin/ManagerAddProduct";

import AddProductManager from "./admin/AddProductManager";
import AddProduct from "./admin/AddProduct";
import AddDiscount from "./admin/AddDiscount"
import ProductManagerDashbaord from "./user/ProductManagerDashboard";
import Edit from "./admin/Edit"

import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Wishlist from "./core/Wishlist";



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                 <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <AdminRoute
                    path="/create/productManager"
                    exact
                    component={AddProductManager}
                />
                <ProductManagerRoute
                    path="/create/manager/product"
                    exact
                    component={ManagerAddProduct}
                />
                <ProductManagerRoute
                    path="/create/productManagerdashboard"
                    exact
                    component={ProductManagerDashbaord}
                />
                <ProductManagerRoute
                    path="/create/manager/discount"
                    exact
                    component={AddDiscount}
                />
                <ProductManagerRoute
                    path="/edit/:id"
                    exact
                    component={Edit}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />                
                <Route path="/wishlist" exact component={Wishlist} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
