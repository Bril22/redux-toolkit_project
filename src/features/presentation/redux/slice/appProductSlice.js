import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import appProductReducer from "../reducer/appProductReducer";
import appProductState from "../state/appProductState";
import { getProduct, saveProduct } from "../../../../api/product_api";


const productEntity = createEntityAdapter({
    selectId: (product) => product.id
});

const appProductSlice = createSlice({
    name: "Product",
    initialState: 
        productEntity.getInitialState(),
        // appProductState,
    reducers: {
        // appProductReducer, 
    },

    // using extraReducers for action/aysnthunk func (dealing with another func)
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            productEntity.setAll(state, action.payload);
        },
        [saveProduct.fulfilled]: (state, action) => {
            productEntity.addOne(state, action.payload);
        }
    }
});

export const productSelector = productEntity.getSelectors(state => state.product)
export const {update} = appProductSlice.actions
export default appProductSlice.reducer