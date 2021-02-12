import React, { Component } from 'react';
import data from '../../data/data.json';
import RFCprops from './RFCprops';

export default class DemoProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data 
        }
    }

    showPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return(
                <div key={index}>
                    <RFCprops />
                </div>
            );
        });
    }
    
    render() {
        return (
            <div className="container"> 
                <div className="row">
                    {this.showPhim()}
                </div>
            </div>
        )
    }
}
