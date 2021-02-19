import * as Type from '../constants/ActionType';

var initialState = {};

const productEdit = (state = initialState, action ) => {
    switch (action.type) {
        case Type.EDIT_PRODUCT:
            state = action.product;
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default productEdit;