import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from "../features/presentation/redux/slice/appProductSlice"

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
