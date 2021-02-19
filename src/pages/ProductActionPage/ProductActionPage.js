import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from '../../actions';


class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPrice: '',
            txtStatus: '',
            id: ''
        }
    }

    componentDidMount() {
        let {match} = this.props;
        let id = match.params.id;
        if(id){
            this.props.onEditProduct(id)
        }

    }

    componentWillReceiveProps(nextProps){
        if(nextProps &&  nextProps.productEdit) {
            let {productEdit} = nextProps;
            this.setState({
                txtName: productEdit.name,
                txtPrice: productEdit.price,
                txtStatus: productEdit.status == true ? 1 : 0
            });
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        let { txtName, txtPrice, txtStatus } = this.state;
        let { history } = this.props;
        let {match} = this.props;

        if (match.params.id) { 
            let product = {
                id: match.params.id,
                name: txtName,
                price: txtPrice,
                status: txtStatus == "1" ? true : false
            }
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            let product = { 
                name: txtName,
                price: txtPrice,
                status: txtStatus == "1" ? true : false
            }
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {
        let { txtName, txtPrice, txtStatus } = this.state;

        return (
            <div className="container">
                <form onSubmit={this.onSave}>
                    <div className="row mx-auto mt-3">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input
                                    type="text"
                                    name="txtName"
                                    className="form-control"
                                    value={txtName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá</label>
                                <input
                                    type="number"
                                    name="txtPrice"
                                    className="form-control"
                                    value={txtPrice}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Hiển thị</label>
                                <select className="form-control" name="txtStatus" value={txtStatus} onChange={this.onChange}>
                                    <option value="1">Hiển thị</option>
                                    <option value="0">Không hiển thị</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>  {
    return {
        productEdit: state.productEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actEditProductRequest(id));
        },
        onUpdateProduct: (product) =>  {
            dispatch(actUpdateProductRequest(product));
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductActionPage));
