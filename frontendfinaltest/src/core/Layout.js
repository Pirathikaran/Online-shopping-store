import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Footer from "./Footer";
import Body from "./Body";



const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
       
        
        <div className={className}>{children}</div>
        <div className="m-2">
        <Footer/>
        </div>
    </div>
);

export default Layout;


