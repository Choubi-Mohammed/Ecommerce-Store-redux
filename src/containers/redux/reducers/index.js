import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import { selectprodcutS } from "../actions/productActions";
const reducers=combineReducers({
    allProducts:productReducer,
    product: selectprodcutS,
})
export default reducers;