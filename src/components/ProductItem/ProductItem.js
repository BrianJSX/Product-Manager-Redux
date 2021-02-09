import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
        let { product } = this.props;
        return (
            <tr>
                <td scope="row">1</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span class={product.status ? 'badge badge-success': 'badge badge-danger'}>{product.status ? 'Nổi bật' : 'Không nổi bật'}</span>
                </td>
                <td>
                    <button type="button" class="btn btn-primary">Sửa</button>
                    <button onClick={ () => {this.onDeleteproduct(product.id)} } type="button" class="btn btn-danger ml-1">Xóa</button>
                </td>
            </tr>
        );
    }

    onDeleteproduct = (id) => {
        if(window.confirm('bạn có muốn xóa sản phẩm này khong')){
            this.props.onDeleteProduct(id);
        }
    }

  
}

export default ProductItem;
