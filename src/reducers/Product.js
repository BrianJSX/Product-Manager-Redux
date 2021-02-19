import * as Type from '../constants/ActionType';
import { findIndex } from 'lodash';

let initialState = [
];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_PRODUCT:
            {   
                state = action.product;
                return [...state];
            }
        case Type.DELETE_PRODUCT: 
            {
                let index = findIndex(state, function(o) {return o.id == action.id});
                state.splice(index,1);
                return [...state];
            }
        case Type.ADD_PRODUCT:
            {
                state.push(action.product);
                return [...state];
            }
        case Type.UPDATE_PRODUCT:
            {
                let index = findIndex(state, function(o) {return o.id == action.product.id});
                state[index] = action.product;
                return [...state];
            }
        default:
            return [...state];
    }
};

export default products;