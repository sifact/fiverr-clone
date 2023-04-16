import React from "react";
import "./Slide.scss";

import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll, bgColor }) => {
    return (
        <div className="slide" style={{ background: bgColor }}>
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;
