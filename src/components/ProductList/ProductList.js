import React, { Component } from 'react';

class ProductList extends Component {

    render() {
       let {children} = this.props;

        return (
            <div className="row">
                <div className="col-md-5 m-3 ">
                    <button type="button" class="btn btn-primary">Thêm sản phẩm</button>
                </div>
                <div className="col-md-9 mt-3 mx-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã sp</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

   

}

export default ProductList;
