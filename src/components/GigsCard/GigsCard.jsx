import React from "react";
import "./GigsCard.scss";
import startIcon from "../../assets/img/star.png";
import heart from "../../assets/img/heart.png";
import { Link } from "react-router-dom";

const GigsCard = ({ item }) => {
    return (
        <Link to="/gig/1">
            <div className="gigsCard">
                <img src={item.img} alt="" />

                <div className="info">
                    <img src={item.pp} alt="" />

                    <h2>{item.username}</h2>
                </div>
                <p>{item.desc}</p>
                <div className="rating">
                    <img src={startIcon} alt="" />
                    <span>{item.start}</span>
                </div>
                <hr />
                <div className="gigInfo">
                    <img src={heart} alt="" />
                    <div className="texts">
                        <span>STARTING AT</span>
                        <span>$ 120</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigsCard;
