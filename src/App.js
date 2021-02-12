import logo from './logo.svg';
import './App.css';
import Total from './components/exerciseLayoutComponent/Total';
import BaiTapCars from './components/BaiTapCars';
import React, { Component } from 'react'
import DemoVongLap1 from './components/DemoVongLap/DemoVongLap1';
import BaiTapVongLap from './components/baitapvonglap/BaiTapVongLap';
import DemoProps from './components/demoprops/DemoProps';
import BaiTapCallBackFunc from './components/demoprops/BaiTapCallBackFunc.js/BaiTapCallBackFunc';
import BaiTapCart from './components/baitapCart/BaiTapCart';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Total /> */}
        {/* <BaiTapCars /> */}
        {/* <DemoVongLap1 /> */}
        {/* <BaiTapVongLap /> */}
        {/* <DemoProps /> */}
        {/* <BaiTapCallBackFunc /> */}
        {/* <Total /> */}
        <BaiTapCart />
      </div>
    )
  }
}

