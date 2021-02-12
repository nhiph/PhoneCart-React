import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalSanPham from './ModalSanPham';
import phoneData from '../../data/phoneData.json';

export default class BaiTapCart extends Component {
    // Quản lý state chung thay đổi cho modal + nút mua thuộc component chi tiết sanr phẩm, truền state vào modal
    constructor(props) {
        super(props);
        this.state={
            gioHang: []
        }
    }
    
    // MUA SAN PHAM + CAP NHAP GIO HANG
    // Nơi khi click vào button "Mua Sản Phẩm" ở ChiTietSanPham component sẽ truyền dữ liệu ra hàm này
    muaSanPham = (sanPhamMua) => {
    // B1: Từ sản phậm đc click ở ChiTietSanPham component, tạo ra giỏ hàng (vì giỏ hàng & sản phẩm tạo khác các thuộc tính)
    let spGioHang = {
                    "maSP": sanPhamMua.maSP, 
                    "tenSP": sanPhamMua.tenSP, 
                    "hinhAnh": sanPhamMua.hinhAnh, 
                    "gia": sanPhamMua.gia,
                    "soLuong": 1
    }; 
    // Kiểm tra giỏ hàng có sẵn sản phẩm mua này chưa 
    var gioHangMoi = [...this.state.gioHang];
    let index = gioHangMoi.findIndex(sp => sp.maSP === spGioHang.maSP); //sp: sản phẩm trong giỏ hàng mang mới cập nhật, // spGioHang: sản phẩm mới được tạo từ việc click mua
    // Sản phẩm click có trong giỏ hàng
    if(index !== -1){ 
        gioHangMoi[index].soLuong += 1;
    }else{
    // Sản phẩm click chwua có trong giỏ hàng => push thêm vào
        gioHangMoi.push(spGioHang);
    }
    this.setState({
        gioHang: gioHangMoi
    });         
    }

    // XOA GIO HANG
    xoaSanPham = (maSP) => {
    // Tìm trong giỏ hàng sản phẩm có mã SP được click 
    var gioHangMoi = [...this.state.gioHang];
    let index = gioHangMoi.findIndex(sp => sp.maSP === maSP);
    // Sản phẩm click có trong giỏ hàng
    if(index !== -1){ 
        gioHangMoi.splice(index, 1); //Xoa 1 sp trong gio
    }
    // CÁCH2 xóa sản phẩm băng hàm filter : var gioHangMoi = this.state.gioHang.filter(sp => sp.maSP !== maSP);
    // Cập nhật lại giỏ hàng
    this.setState({
        gioHang: gioHangMoi
    });
    }

    // TANG GIAM SO LUONG SAN PHAM GIO HANG
    tangGiamSoLuong = (maSP, tangGiam) => { //tangGiam ==true => tang; false => giam
        var gioHangMoi = [...this.state.gioHang];
        let index = gioHangMoi.findIndex(sp => sp.maSP === maSP);
        // Tang
        if(tangGiam){
            gioHangMoi[index].soLuong += 1;
        }else{ // Giam
            if(gioHangMoi[index].soLuong>1){
                gioHangMoi[index].soLuong -= 1;
            }
        }
        // Cajp nhat lai state gio hang
        this.setState({
            gioHang: gioHangMoi
        })
    }

    render() {
        let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return tsl += spGH.soLuong;
        },0)

        return (
            <div className="container">
                <h4 className="text-center text-success">Bai Tap Gio Hang</h4>
                <ModalSanPham 
                    gioHang={this.state.gioHang} 
                    xoaSanPham={this.xoaSanPham}
                    tangGiamSoLuong = {this.tangGiamSoLuong}
                />
                <div>
                    <button className="btn btn-dark px-3 mb-1" style={{cursor: 'pointer'}} data-toggle="modal" data-target="#myModal">
                    <i className="fa fa-cart-plus text-white "></i>
                    ({tongSoLuong})
                    </button>
                {/* data-toggle + data-target: gan vao button khi click vao nos hien ra popup ModalSanPham */}
                    
                </div>
                <DanhSachSanPham muaSanPham={this.muaSanPham} phoneData={phoneData} />
            </div>
        )
    }
}
