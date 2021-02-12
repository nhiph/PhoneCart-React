import React, { Component } from 'react';
import mangSanPham from '../../../data/data.json';
import SanPhamChiTiet from './SanPhamChiTiet';

export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPhamChiTiet: mangSanPham[0]
        };
    }


    showSanPham = () => {
        // Lấy props mảng sản phẩm qua props từ component cha
        // let { mangSanPham } = this.props;
        console.log(mangSanPham);
        return mangSanPham.map((sanpham, index) => {
            return (
                <SanPhamChiTiet key={index} sanpham={sanpham} showDetail={this.showDetail}/>
            );
        })
    }

    showDetail = (sanpham) => {
        this.setState({
            sanPhamChiTiet: sanpham
        })
    }

    render() {
        let {sanPhamChiTiet} = this.state;
        return (
            <div className="container">
                <div className="row mt-5">
                    {this.showSanPham()}
                </div>
                  <div className="row">
                    <div className="col-6">
                        <h3>{sanPhamChiTiet.tenPhim}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} alt=""/>
                    </div>
                    <div className="col-6">
                    <h3>Thong so ky thuat: {sanPhamChiTiet.maPhim}</h3>
                        <table className="table">
                            <thead></thead>
                        </table>
                    </div>
                </div> 
            </div>
        )
    }
}
