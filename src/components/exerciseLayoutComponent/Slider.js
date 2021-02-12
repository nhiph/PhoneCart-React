import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        return (

            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="container carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://previews.123rf.com/images/varijanta/varijanta1602/varijanta160200030/51963434-thin-line-design-concept-for-project-website-banner-vector-illustration-concept-for-creative-or-tech.jpg" alt="Los Angeles" width={1200} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://thumbs.dreamstime.com/z/thin-line-design-concept-project-website-banner-template-vector-illustration-creative-technical-process-preview-93300177.jpg" alt="Chicago" width={1200} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn3.vectorstock.com/i/1000x1000/21/27/project-outline-colorful-banner-business-vector-23762127.jpg" alt="New York" width={1200} height={500} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>


        )
    }
}
