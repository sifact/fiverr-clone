import React from "react";
import "./GigsCard.scss";
import starIcon from "../../assets/img/star.png";
import heart from "../../assets/img/heart.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import user from "../../assets/user.jpg";

const GigsCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [`${item.userId}`],
        queryFn: () =>
            newRequest
                .get(`/users/${item.userId}`)
                .then((res) => {
                    return res.data;
                })
                .catch((e) => console.log(e)),
    });

    return (
        <Link to={`/gig/${item._id}`}>
            <div className="gigsCard">
                <img src={item.cover} alt="" />

                {isLoading ? (
                    "loading..."
                ) : error ? (
                    "Something went wrong..."
                ) : (
                    <div className="info">
                        <img src={data.img || user} alt="" />

                        <h2>{data.username}</h2>
                    </div>
                )}
                <p>{item.desc}</p>
                <div className="rating">
                    <img src={starIcon} alt="" />
                    <span>
                        {!isNaN(
                            Math.round(item.totalStars / item.starNumber)
                        ) && Math.round(item.totalStars / item.starNumber)}
                    </span>
                </div>
                <hr />
                <div className="gigInfo">
                    <img src={heart} alt="" />
                    <div className="texts">
                        <span>STARTING AT</span>
                        <span>$ {item.price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigsCard;
