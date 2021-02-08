import * as Type from '../constants/ActionType';

let initialState = [
   
];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_PRODUCT:
            state = action.product;
            return [...state];
        case Type.DELETE_PRODUCT: 
            console.log(action.id);
            return [...state];
        default:
            return [...state];
    }
};

export default products;