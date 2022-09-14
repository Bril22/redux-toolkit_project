import { deleteProduct, getProduct, saveProduct } from "../../api/product_api";
import { productEntity } from "../presentation/redux/slice/appProductSlice";

export const getProductUsecases = {
    [getProduct.fulfilled]: (state, action) => {
        productEntity.setAll(state, action.payload);
    }
};

export const saveProductUsecases = {
    [saveProduct.fulfilled]: (state, action) => {
        productEntity.addOne(state, action.payload);
    }
};

export const deleteProductUsecases = () => {
    return (
        deleteProduct.fulfilled = (state, action) => {
            productEntity.removeOne(state, action.payload);
        });
};