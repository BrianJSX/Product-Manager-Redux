import * as Type from '../constants/ActionType';

export const actFetchProduct = (product) => {
    return {
        type: Type.FETCH_PRODUCT,
        product
    }
} 

export const actOnDeleteProduct = (id) => {
    return { 
        type: Type.DELETE_PRODUCT,
        id
    }
}