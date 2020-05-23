import { API } from "../config";

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProductsWithID = (productId) => {
    return fetch(`${API}/product/edit/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategoryWithID = (categoryId) => {
    return fetch(`${API}/category/edit/${categoryId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateDiscount = (id,name,description,price,category,quantity,sold,shipping,discount,discountprice)=>{
     
    const form= new FormData;
    form.append('name',name);
    form.append('description',description);
    form.append('price',price);
    form.append('category',category);
    form.append('quantity',quantity);
    form.append('sold',sold);
    form.append('shipping',shipping);
    form.append('discount',discount);
    form.append('discountprice',discountprice);

    return fetch(`${API}/products/updateDiscount/${id}`, {
        method: "POST",
        headers:{
            Accept: "application/json"
        },
        body:form
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

}


export const deleteProduct=(userId,token,product)=>{
    return fetch(`${API}/product/${product._id}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
        body:product
    })
        .then(response=>{
            return response.json();
        })
        .catch(err=>console.log(err));
};


