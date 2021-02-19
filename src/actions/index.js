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

export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'GET', null).then((res)=>{
            dispatch(actEditProduct(res.data));
        })
    }
}

export const actEditProduct = (product) => {
    return {
        type: Type.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`product/${product.id}`, 'PUT', product).then((res)=>{
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) =>  {
    return { 
        type: Type.UPDATE_PRODUCT,
        product
    }
}