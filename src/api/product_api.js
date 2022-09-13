import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// run json server => json-server -w src/db/db_product.json -p 7000

// get product
export const getProduct = createAsyncThunk("products/getProducts", 
    async() => {
        const response = await axios.get("http://localhost:7000/db_product");
        return response.data;
    });

// import product
export const saveProduct = createAsyncThunk("products/saveProducts",
    async({product, price}) => {
        const response = await axios.post("http://localhost:7000/db_product", {
            product, price
    });
        return response.data;
    });

// delete product
export const deleteProduct = createAsyncThunk("products/deleteProduct", 
    async(id) => {
        await axios.delete(`http://localhost:7000/db_product/${id}`);
        return id;
    });

// edit product
export const editProduct = createAsyncThunk("products/editProduct", 
    async({id, product, price}) => {
        const response = await axios.patch(`http://localhost:7000/db_product/${id}`, {
            product, price
        });
        return response.data;
    });