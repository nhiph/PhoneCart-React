import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {sanpham, showModal} = this.props;
        return (

            <div className="row">
                <div className="col-3" style={{ backgroundColor: 'lavender' }}>.col</div>
                <div className="col-3" style={{ backgroundColor: 'orange' }}>.col</div>
                <div className="col-3" style={{ backgroundColor: 'lavender' }}>.col</div>
                <div className="col-3" style={{ backgroundColor: 'orange' }}>.col</div>
            </div>


        )
    }
}
