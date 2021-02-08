import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mx-auto mt-3">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label>Giá</label>
                            <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Hiển thị</label>
                            <select className="form-control" name id>
                                <option>Hiển thị</option>
                                <option>Không hiển thị</option>
                            </select>
                        </div>
                            <button type="button" className="btn btn-primary">Lưu</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductActionPage;
