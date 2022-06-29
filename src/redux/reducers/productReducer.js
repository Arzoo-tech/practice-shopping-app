import { ActionTypes } from "../constants/action-types";

const initialState=
{
    products:[],
};
//We catch the action-object returned with the help of dispatch function
export const productReducer = (state= initialState, {type,payload})=>
{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            //taking existing states with ...
            return {state,products:payload};
        default:
            return state;
    }
};
export const selectedProductReducer = (state= {}, {type,payload})=>
{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            //taking existing states with ... and destructured payload
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
           return {};
        default:
            return state;
    }
};