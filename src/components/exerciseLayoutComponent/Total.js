import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Slider from './Slider';
import Footer from './Footer';
import Modal from './Modal';

export default class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPhamModal: {
                maSP: 1, tenSP: 'Black Berry', hinhAnh:'https://hoanghamobile.com/i/preview/Uploads/2020/11/03/silver_637399930572545507.png', gia: 1000
            }
        }
    }

    mangSanPham = [
        {maSP: 1, tenSP: 'Black Berry', hinhAnh:'https://hoanghamobile.com/i/preview/Uploads/2020/11/03/silver_637399930572545507.png', gia: 1000},
        {maSP: 1, tenSP: 'Iphone X', hinhAnh:'https://www.viettablet.com/images/detailed/26/iphone-x-lock.png', gia: 2000},
        {maSP: 1, tenSP: 'Note 7', hinhAnh:'https://didongthongminh.vn/upload_images/2017/11/samsung-galaxy-note-FE-black.png', gia: 1500},
        {maSP: 1, tenSP: 'Vivo 850', hinhAnh:'https://phonesdata.com/files/models/vivo--X27-401.png', gia: 3000}
    ]
    
    // Du lieu can nhan o dau, tao callback func tai component do
    showModal = (sanphamchitiet) => {
        this.setState({
            sanPhamModal: sanphamchitiet
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Slider />
                <ProductList mangSanPham={this.mangSanPham} showModal={this.showModal}/>
                <Footer />
                <Modal sanPhamModal={this.state.sanPhamModal}/>
            </div>
        )
    }
}
