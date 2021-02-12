import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import data from '../../../data/data.json';

export default class BaiTapCallBackFunc extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center text-success mt-3">
                    BAI TAP CALL BACK FUNCTION
                </h2>
                <div className="container">
                    <div className="row">
                        <DanhSachSanPham />
                    </div>
                </div>
            </div>
        )
    }
}
