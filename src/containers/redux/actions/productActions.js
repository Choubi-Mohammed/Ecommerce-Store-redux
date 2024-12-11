import { actiontypes } from "../contans/action-types";
export const setProducts=(products)=>{
    return {
        type:actiontypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectprodcutS=(product)=>{
    return {
        type:actiontypes.SELECTED_PRODUCT,
        payload:product
    }
};
