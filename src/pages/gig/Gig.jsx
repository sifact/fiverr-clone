import React from "react";
import "./Gig.scss";
import star from "../../assets/img/star.png";
import user from "../../assets/user.jpg";
import Slide from "../../components/Slide/Slide";
import Slider from "infinite-react-carousel";
import like from "../../assets/img/like.png";
import dislike from "../../assets/img/dislike.png";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import check from "../../assets/img/greencheck.png";
import clock from "../../assets/img/clock.png";
import recycle from "../../assets/img/recycle.png";
import noAvatar from "../../assets/user.jpg";
import { useEffect } from "react";
import Reviews from "../../components/Reviews/Reviews";

const Gig = () => {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ["gig"],
        queryFn: () =>
            newRequest
                .get(`/gigs/single/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch((e) => console.log(e)),
    });

    const userId = data?.userId;

    const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
        refetch,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            newRequest.get(`/users/${userId}`).then((res) => {
                return res.data;
            }),
        enabled: !!userId,
    });

    useEffect(() => {
        if (userId) {
            refetch();
        }
    }, [userId]);

    // console.log(dataUser);
    return (
        <div className="gig">
            {isLoading ? (
                "loading..."
            ) : error ? (
                "Something went wrong..."
            ) : (
                <div className="container">
                    <div className="left">
                        <span className="breadcrumbs">
                            Fiverr {">"} Graphics & Design {">"}
                        </span>
                        <h1>{data.title}</h1>
                        {isLoadingUser ? (
                            "loading..."
                        ) : errorUser ? (
                            "Something went wrong..."
                        ) : (
                            <div className="user">
                                <img
                                    className="pp"
                                    src={dataUser.img || noAvatar}
                                    alt=""
                                />
                                <span>{dataUser.username}</span>
                                <div className="stars">
                                    {!isNaN(
                                        Math.round(
                                            data.totalStars / data.starNumber
                                        )
                                    ) && (
                                        <>
                                            {Array(
                                                Math.round(
                                                    data.totalStars /
                                                        data.starNumber
                                                )
                                            )
                                                .fill()
                                                .map((item, i) => (
                                                    <img
                                                        key={i}
                                                        src={star}
                                                        alt=""
                                                    />
                                                ))}

                                            <span>
                                                {Math.round(
                                                    data.totalStars /
                                                        data.starNumber
                                                )}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        <Slider
                            slidesToShow={1}
                            arrowsScroll={1}
                            className="slider"
                        >
                            {data?.images.map((img) => (
                                <img src={img} key={img} alt="" />
                            ))}
                        </Slider>
                        <h2>About This Gig</h2>
                        <p>{data.desc}</p>

                        {isLoadingUser ? (
                            "loading..."
                        ) : errorUser ? (
                            "Something went wrong..."
                        ) : (
                            <div className="seller">
                                <h2>About The Seller</h2>
                                <div className="user">
                                    <img
                                        className="pp"
                                        src={dataUser.img || noAvatar}
                                        alt=""
                                    />
                                    <div className="info">
                                        <span>{dataUser.username}</span>
                                        <div className="stars">
                                            {!isNaN(
                                                Math.round(
                                                    data.totalStars /
                                                        data.starNumber
                                                )
                                            ) && (
                                                <>
                                                    {Array(
                                                        Math.round(
                                                            data.totalStars /
                                                                data.starNumber
                                                        )
                                                    )
                                                        .fill()
                                                        .map((item, i) => (
                                                            <img
                                                                key={i}
                                                                src={star}
                                                                alt=""
                                                            />
                                                        ))}

                                                    <span>
                                                        {Math.round(
                                                            data.totalStars /
                                                                data.starNumber
                                                        )}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <button>Contact Me</button>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="items">
                                        <div className="item">
                                            <span className="title">From</span>
                                            <span className="desc">
                                                {dataUser.country}
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Member since
                                            </span>
                                            <span className="desc">
                                                Aug 2022
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Avg. response time
                                            </span>
                                            <span className="desc">
                                                4 hours
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Last delivery
                                            </span>
                                            <span className="desc">1 day</span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Languages
                                            </span>
                                            <span className="desc">
                                                English
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{dataUser.desc}</p>
                                </div>
                            </div>
                        )}
                        <Reviews id={id} />
                    </div>
                    <div className="right">
                        <div className="price">
                            <h3>{data.shortTitle}</h3>
                            <h2>$ {data.price}</h2>
                        </div>
                        <p>{data.shortDesc}</p>
                        <div className="details">
                            <div className="item">
                                <img src={clock} alt="" />
                                <span>{data.deliveryTime}</span>
                            </div>
                            <div className="item">
                                <img src={recycle} alt="" />
                                <span>3 Revisions</span>
                            </div>
                        </div>
                        <div className="features">
                            {data.features.map((feature) => (
                                <div key={feature} className="item">
                                    <img src={check} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <button>Continue</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gig;
