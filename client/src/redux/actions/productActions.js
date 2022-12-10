import axios from "axios"
import  * as actiontype from "../constants/productConstants"

const URL = `http://localhost:8000`

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        
        dispatch({ type: actiontype.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        
        dispatch({ type: actiontype.GET_PRODUCTS_FAIL , payload: error.response });
    }
}

export const getProductDetails = (id) => async (dispatch) =>{
    try {
        dispatch({type: actiontype.GET_PRODUCTDETAILS_REQUEST})
        const { data } = await axios.get(`${URL}/product/${id}`)
        
        dispatch({type: actiontype.GET_PRODUCTDETAILS_SUCCESS, payload : data})

    } catch (error) {
        dispatch({ type: actiontype.GET_PRODUCTDETAILS_FAIL , payload: error.response });   
    }
}