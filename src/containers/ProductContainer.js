import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import { actOnDeleteProductRequest, actFetchProductRequest } from '../actions';
import ProductItem from '../components/ProductItem/ProductItem';

class ProductContainer extends Component {

    componentDidMount() { 
        let {onFetchProduct} = this.props;
        onFetchProduct();
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
                stt={index} 
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
        onFetchProduct: () => {
            dispatch(actFetchProductRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actOnDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)