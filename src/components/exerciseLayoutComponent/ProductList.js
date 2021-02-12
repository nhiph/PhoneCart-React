import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    showSanPham = () => {
        let {mangSanPham} = this.props;
        let {showModal} = this.props;
        return mangSanPham.map((sanpham, index) => {
            return(
                <ProductItem key={index} sanpham={sanpham} showSanPham={showModal}/>
            );
        })
    }
    render() {
        return (
            <div>
                <ProductItem /> 
            </div>
        )
    }
}
