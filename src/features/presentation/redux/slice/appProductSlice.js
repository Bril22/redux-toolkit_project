import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import appProductReducer from "../reducer/appProductReducer";
import appProductState from "../state/appProductState";
import { deleteProduct, editProduct, getProduct, saveProduct } from "../../../../api/product_api";
import { getProductUsecases, saveProductUsecases, deleteProductUsecases, } from "../../../usecases/appProductUsecases";



export const productEntity = createEntityAdapter({
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
        },
        [deleteProduct.fulfilled]: (state, action) => {
            productEntity.removeOne(state, action.payload);
        },
        [editProduct.fulfilled]: (state, action) => {
            productEntity.updateOne(state, {id: action.payload.id, updates: action.payload});
        },
        // getProductUsecases,
        // saveProductUsecases,
        // deleteProductUsecases,
    }
});

export const productSelector = productEntity.getSelectors(state => state.product)
// export func for editValue comp
export default appProductSlice.reducer