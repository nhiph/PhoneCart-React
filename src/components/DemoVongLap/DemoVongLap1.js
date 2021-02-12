import React, { Component } from 'react'

export default class DemoVongLap1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { id: 1, name: "Samsung Galaxy", price: 15000000 },
                { id: 2, name: "IPhone 6 plus", price: 17000000 },
                { id: 3, name: "Oppo F1s", price: 10000000 }
            ]
        }
    }

    // Viet pthuc render UI

    showProduct = () => {
        var contentTable = [];

        // METHOD 2 : MAP CACH PHO BIEN SU DUNG NHIEU NHAT
        // return this.state.mangSanPham.map((product, index)... : co the dem return1 len, cuoi code k return lai
        contentTable = this.state.mangSanPham.map((product, index) => {
            console.log(product);
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });
        return contentTable;

        // METHOD 1: FOR 
        // for (var i = 0; i < this.state.mangSanPham.length; i++) {
        //     const sanPham = this.state.mangSanPham[i];
        //     // contentTable += `<tr><td>${sanPham.id}</td><td>${sanPham.name}</td><td>${sanPham.price}</td></tr>`
        //     // Neu dung += thi se tra ket qua chuoi => can hien thi ra the
        //     // contentTable.push(<tr><td>${sanPham.id}</td><td>${sanPham.name}</td><td>${sanPham.price}</td></tr>);
        //     contentTable.push(
        //         <tr>
        //             <td>{sanPham.id}</td>
        //             <td>{sanPham.name}</td>
        //             <td>{sanPham.price}</td>
        //         </tr>);
        // }
        // return contentTable;
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="bg-dark text-white text-center">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showProduct()}

                        {/* METHOD 3: INSIDE RENDER */}

                        {/* {this.state.mangSanPham.map((product, index) => {
                            console.log(product);
                        return(
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                            );
                        });} */}
                    </tbody>
                </table>
            </div>
        )
    }
}
