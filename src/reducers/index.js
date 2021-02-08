import {combineReducers} from 'redux';
import products from './Product';

const myReducer = combineReducers({
    products
});

export default myReducer;