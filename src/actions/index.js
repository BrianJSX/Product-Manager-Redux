import * as Type from '../constants/ActionType';
import callApi from '../utils/callApi';

export const actFetchProductRequest = () => {
    return (dispatch) => {
        return callApi('product', 'GET', null).then(res => {
            dispatch(actFetchProduct(res.data));
        });
    }
}

export const actFetchProduct = (product) => {
    return {
        type: Type.FETCH_PRODUCT,
        product
    }
} 

export const actAddProductRequest = (product) =>  {
    return (dispatch) => {
        return callApi('product', 'POST', product).then((res)=>{
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) =>  {
    return {
        type: Type.ADD_PRODUCT,
        product
    }
}

export const actOnDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {
            dispatch(actOnDeleteProduct(id));
        });
    }
}

export const actOnDeleteProduct = (id) => {
    return { 
        type: Type.DELETE_PRODUCT,
        id
    }
}