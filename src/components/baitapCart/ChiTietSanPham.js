import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {

    render() {
        let {phone, muaSanPham} = this.props
        return (
            <div className="card">
                    <img className="card-img-top" src={phone.hinhAnh} alt="" width={400} height={200} />
                    <div className="card-body">
                        <h4 className="card-title">{phone.tenSP}</h4>
                        <button
                            className="btn btn-success"
                            onClick={() => this.props.muaSanPham(phone)}
                        >Mua sản phẩm
                        </button>
                        <p className="card-text">{phone.gia}</p>
                    </div>
                </div>
        )
    }
}
