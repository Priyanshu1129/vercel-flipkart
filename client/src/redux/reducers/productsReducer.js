import * as actiontype from '../constants/productConstants'


export const getProductsReducer = (state = {products:[]}, action)=>{

    switch(action.type)
    {
       case actiontype.GET_PRODUCTS_SUCCESS:
       return { products: action.payload }

       case actiontype.GET_PRODUCTS_FAIL:
        return { error : action.payload }

        default:
            return state 
    }

}
  

export const getProductDetailsReducer = (state={ product:{}}, action) =>{
    switch(action.type)
    {
        case actiontype.GET_PRODUCTDETAILS_REQUEST:
        return { loading: true }
        
        case actiontype.GET_PRODUCTDETAILS_SUCCESS:
            return {  product: action.payload, loading: false}
        
        case actiontype.GET_PRODUCTDETAILS_FAIL:
            return { loading: false , error: action.payload }

        case actiontype.GET_PRODUCTDETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}
