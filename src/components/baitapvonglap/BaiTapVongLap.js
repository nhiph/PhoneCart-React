import React, { Component } from 'react';
import data from '../../data/data.json';

export default class BaiTapVongLap extends Component {
    // Khai bao thuoc tinh
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }

    showPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div className="card col-4" style={{ width: 400 }}>
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.biDanh} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa.length > 100 ? phim.moTa.substr(0,100)+'...' : phim.moTa}</p>
                        <a href="#" className="btn btn-primary">{phim.maPhim}</a>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="container">
                <h1>BAI TAP TONG HOP VONG LAP</h1>
                <div className="row">
                    {this.showPhim()}
                </div>
            </div>
        )
    }
}
