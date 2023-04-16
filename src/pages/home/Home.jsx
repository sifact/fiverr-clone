import React from "react";
import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/CatCard/CatCard";
import check from "../../assets/img/check.png";
import video from "../../assets/img/video.mp4";
import { projects } from "../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5} bgColor="">
                {cards.map((item) => (
                    <CatCard item={item} key={item.id} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>
                            A whole world of freelance talent at your
                            fingerprints
                        </h1>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                    </div>
                    <div className="item">
                        <video src={video} controls></video>
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>
                            {" "}
                            <b>fiverr</b> business.
                        </h1>
                        <h1>A business solution designed for teams</h1>
                        <p>
                            Upgrade to a curated experience packed with tools
                            and benefits, dedicated to businesses
                        </p>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <div className="title">
                            <img src={check} alt="" />
                            <span>The best for every budget</span>
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <Slide slidesToShow={4} arrowsScroll={4} bgColor="#f5f5f5">
                {projects.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                ))}
            </Slide>
        </div>
    );
};

export default Home;
