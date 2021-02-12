import React, { Component } from 'react'
import ChiTietSanPham from './ChiTietSanPham'

export default class DanhSachSanPham extends Component {


    render() {
        let { phoneData, muaSanPham } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {phoneData.map((phone, index) => {
                        return (
                            <div className="col-3" key={index}> 
                                <ChiTietSanPham muaSanPham={muaSanPham} phone={phone} />
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}
