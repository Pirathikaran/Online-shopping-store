import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getCategories, getProducts} from "../core/apiCore";
import Menu from '../core/Menu';
import { isAuthenticated } from "../auth";
import {deleteProduct} from "../admin/apiAdmin";
import {Button} from 'react-bootstrap'


const { user, token } = isAuthenticated();
let deleted = false;

const Product = props =>(
    <tr>
        <td>{props.product.category.name}</td>
        <td>{props.product.name}</td>
        <td>{props.product.quantity}</td>
        <td>Rs.{props.product.price}</td>
        <td>{props.product.discount}%</td>
        <td>Rs.{props.product.discountprice}</td>
        <td>
            
            <Link to={"/edit/"+props.product._id}>
            <Button style={{borderRadius:'3px', padding:'6px 25px', margin:'0px 30px'}} variant="warning">
                EDIT
            </Button>
            </Link> 
             <Button style={{borderRadius:'3px' , marginRight: '0px'}} variant="danger" href="#" onClick={()=>{props.deleteproduct(props.product)}}>DELETE</Button>
        </td>
    </tr>
)

export default class AddDiscount extends Component{

    constructor(props){
        super(props)

        this.state={
            products:[]
        }
    }

    componentDidMount(){
        getProducts()
            .then(resultProducts=>{
                this.setState({
                    products:resultProducts
                })
            });
            
    }

    deleteItem=(product)=>{
        deleteProduct(user._id,token,product)
            .then(result=>{
                console.log(result)
                if(result.message){
                    deleted=true
                }
                console.log(deleted)
            })
            
        
        this.setState({
            products: this.state.products.filter(item => item._id!==product._id)
        })
    }

    //  showError = () => (
    //     <div
    //         className="alert alert-danger"
    //         style={{ display: error ? "" : "none" }}
    //     >
    //         {error}
    //     </div>
    // );


    productList=()=>{
        return this.state.products.map(Currentproduct=>{
            return <Product product={Currentproduct} deleteproduct={this.deleteItem} key={Currentproduct._id}/>
        })
    }

    render(){
        return(
            <div style={{height:'100vh'}}>
                <Menu/>
                <h3 style={{padding:'20px 20px 30px'}}>Product Details</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Product Category</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Discount Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }
}