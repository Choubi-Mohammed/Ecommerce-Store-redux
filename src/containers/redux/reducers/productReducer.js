import { actiontypes } from "../contans/action-types"

const initailState={
    products:[]
}

const productReducer = (state=initailState,{type,payload}) => {
    switch (type){
        case actiontypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;        
    }
}
export default productReducer
