import React, { Component } from 'react'

export default class BaiTapCars extends Component {
    // Thuoc tinh
    constructor(props) {
        super(props);
        this.state = {
            img: 'https://driver.gianhangvn.com/image/mazda-3-sedan-at-2-0l-419559j20978.jpg' 
        };
    }
    
    changeColor = (color) => {
        var imgSoure = '';
        switch (color) {
            case "red": {
                imgSoure= 'https://driver.gianhangvn.com/image/mazda-3-sedan-at-2-0l-419559j20978.jpg'
            }
                break;

            case "silver": {
                imgSoure= 'https://phukienotonhapkhau.files.wordpress.com/2018/11/su-that-ve-mazda-1.png'
            }
                break;

            case "black": {
                imgSoure= 'https://img1.oto.com.vn/resize/640x360/2020/10/27/10e8a06c-89dd.jpg'
            }
                break;
            
            default:
                break;
        }
        this.setState({
            img: imgSoure
        });
    }

    render() {
        return (
            <div className="container">    
                <div className="row">   
                    <div className="col-6">
                        {/* DISPLAY CAR'S IMAGE */}
                        <h1>CAR IMAGE</h1>
                        <img src={this.state.img} width={500} height={300} />
                    </div>
                    <div className="col-6">
                        <button onClick={()=> this.changeColor("red")} className="btn btn-danger text-white mr-5 mt-5">RED</button>
                        <button onClick={()=> this.changeColor("silver")} className="btn btn-primary text-white mr-5 mt-5">SILVER</button>
                        <button onClick={()=> this.changeColor("black")} className="btn btn-dark text-white mr-5 mt-5">BLACK</button>
                    </div>
                </div>
            </div>
        )
    }
}
