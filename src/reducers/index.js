import {combineReducers} from 'redux';
import products from './Product';
import productEdit from './EditProduct';

const myReducer = combineReducers({
    products,
    productEdit
});

export default myReducer;