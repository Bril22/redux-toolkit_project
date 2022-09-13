import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get product
export const getProduct = createAsyncThunk("db_product/getProducts", 
    async() => {
        const response = await axios.get("http://localhost:7000/db_product");
        return response.data;
    });

// import product
export const saveProduct = createAsyncThunk("db_product/saveProducts",
    async({product, price}) => {
        const response = await axios.post("http://localhost:7000/db_product", [
            product, price
        ]);
        return response.data;
    });