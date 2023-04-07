import React, { Children } from "react";
import "./Slide.scss";
import { cards } from "../../data";
import Slider from "infinite-react-carousel";
import CatCard from "../CatCard/CatCard";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
    return (
        <div className="slide">
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;
