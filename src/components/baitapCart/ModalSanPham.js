import React, { Component } from 'react'

export default class ModalSanPham extends Component {
    render() {
        const {gioHang, xoaSanPham, tangGiamSoLuong}=this.props; //Lấy dữ liệu giỏ hàng từ BaiTapCart
        console.log(gioHang);

        return (
            <div className="container">
                
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{maxWidth: '800px', width:'800px'}}>
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Giỏ hàng</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <table className="table">
                                <thead>
                                    <tr>
                                        <td>MÃ SP</td>
                                        <td>HÌNH ẢNH</td>
                                        <td>TÊN SẢN PHẨM</td>
                                        <td>SỐ LƯỢNG</td>
                                        <td>ĐƠN GIÁ</td>
                                        <td>THÀNH TIỀN</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gioHang.map((spGH, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{spGH.maSP}</td>
                                                <td><img src={spGH.hinhAnh} width={60} height={70} alt=""/></td>
                                                <td>{spGH.tenSP}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-info mx-3"
                                                        onClick={() => tangGiamSoLuong(spGH.maSP, true)}
                                                    >+</button>
                                                    {spGH.soLuong}
                                                    <button 
                                                        className="btn btn-info mx-3"
                                                        onClick={() => tangGiamSoLuong(spGH.maSP, false)}
                                                    >-</button>
                                                </td>
                                                <td>{spGH.gia}</td>
                                                <td>{spGH.soLuong * spGH.gia}</td>
                                                <td><button 
                                                    className="btn btn-danger"
                                                    onClick={() => xoaSanPham(spGH.maSP)}
                                                    >Xóa</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <td colSpan="5"></td>
                                    <td>Tổng tiền</td>
                                    <td>
                                        {gioHang.reduce((tongTien, spGioHang, index) => {
                                            return tongTien += spGioHang.soLuong*spGioHang.gia;
                                        },0)}
                                    </td>
                                </tfoot>
                                </table>
        </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
