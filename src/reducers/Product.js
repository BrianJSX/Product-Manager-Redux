import * as Type from '../constants/ActionType';
import { findIndex } from 'lodash';
import callApi from '../utils/callApi';

let initialState = [
   
];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_PRODUCT:
            state = action.product;
            return [...state];
        case Type.DELETE_PRODUCT:
            callApi(`product/${action.id}`, 'DELETE', null).then(res => {
                if(res.status == 200){
                    let index = findIndex(state, function(o) { return o.id == action.id; });
                    state.splice(index, 1);
                    return [...state];
                }
            }).catch(err => {
                console.log(err);
            })
        default:
            return [...state];
    }
};

export default products;