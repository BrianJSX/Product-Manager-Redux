import React, { Component } from 'react';
import {Link}  from 'react-router-dom'
class ProductItem extends Component {

    onDeleteproduct = (id) => {
        if(window.confirm('bạn có muốn xóa sản phẩm này không')){
            this.props.onDeleteProduct(id);
        }
    }

    render() {
        let { product, stt } = this.props;
    
        return (
            <tr>
                <td scope="row">{stt + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span class={product.status ? 'badge badge-success': 'badge badge-danger'}>{product.status ? 'Nổi bật' : 'Không nổi bật'}</span>
                </td>
                <td>
                    <Link className="btn btn-success" to={`product/${product.id}/edit`}>Sửa </Link>
                    <button onClick={ () => {this.onDeleteproduct(product.id)} } type="button" class="btn btn-danger ml-1">Xóa</button>
                </td>
            </tr>
        );
    }

    
  
}

export default ProductItem;
