import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios';
import { actFetchProduct, actOnDeleteProduct } from '../actions';
import ProductItem from '../components/ProductItem/ProductItem';

class ProductContainer extends Component {

    componentDidMount() { 
        let { onFetchProduct } = this.props;
        axios({
            method: 'get',
            url: 'https://6020ba8f46f1e40017803627.mockapi.io/todoapp/product',
        }).then(function (res) {
            onFetchProduct(res.data);
        });
    }

    render() {
        let { products } = this.props;
        return (
            <ProductList products={products}>{this.showProductItem(products)}</ProductList>
        );
    }

    showProductItem = (products) => {
        let {onDeleteProduct} = this.props;

        let result = null; 
        result = products.map((product, index) => {
            return (
                <ProductItem 
                key={index} 
                product={product}
                onDeleteProduct={onDeleteProduct}
                >
                </ProductItem>
            )
        })
        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProduct: (products) => {
            dispatch(actFetchProduct(products));
        },
        onDeleteProduct: (id) => {
            dispatch(actOnDeleteProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)