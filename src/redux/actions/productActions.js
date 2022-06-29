import { ActionTypes } from "../constants/action-types"

//More than one products
export const setProducts=(products)=>
{
    return{
        //Javascript Objects
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};
//For one product
export const selectedProduct=(product)=>
{
    return{
        //Javascript Objects
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};
export const removeselectedProduct=()=>
{
    return{
        //Javascript Objects
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
