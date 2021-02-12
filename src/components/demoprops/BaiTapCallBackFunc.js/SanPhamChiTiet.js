import React, { Component } from 'react'

export default class SanPhamChiTiet extends Component {
    
    render() {
        let {sanpham, index} = this.props;
        return (
            <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={sanpham.hinhAnh} alt="" width={500} height={300} />
                    <div className="card-body">
                        <h4 className="card-title">{sanpham.tenPhim}</h4>
                        <button
                            className="btn btn-success"
                            onClick={() => this.props.showDetail(sanpham)}
                        >Xem Chi tiet
                        </button>
                        <p className="card-text">{sanpham.moTa.length > 100 ? sanpham.moTa.substr(0, 100) + '...' : sanpham.moTa}</p>
                    </div>
                </div>
            </div>
        )
    }
}
