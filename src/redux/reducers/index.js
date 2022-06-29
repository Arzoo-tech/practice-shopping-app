//Here we can combine multiple reducers
import { combineReducers } from "redux";
import { productReducer ,selectedProductReducer } from "./productReducer";

const reducers= combineReducers({

    allProducts:productReducer,
    product:selectedProductReducer,

})

export default reducers;