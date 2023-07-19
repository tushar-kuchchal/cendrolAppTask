import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default store;
