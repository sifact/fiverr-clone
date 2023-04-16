import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import linkedIn from "../../assets/img/linkedin.png";
import pinterest from "../../assets/img/pinterest.png";
import instagram from "../../assets/img/instagram.png";
import language from "../../assets/img/language.png";
import accessibility from "../../assets/img/accessibility.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="categories">
                        <h2>Categories</h2>
                        <Link>Graphics & Design</Link>
                        <Link>Digital Marketing</Link>
                        <Link>Writing & Translation</Link>
                        <Link>Video & Animation</Link>
                        <Link>Music & Audio</Link>
                        <Link>Programming & Tech</Link>
                        <Link>Data</Link>
                        <Link>Business</Link>
                        <Link>Lifestyle</Link>
                        <Link>Photography</Link>
                        <Link>Sitemap</Link>
                    </div>
                    <div className="categories">
                        <h2>Categories</h2>
                        <Link>Graphics & Design</Link>
                        <Link>Digital Marketing</Link>
                        <Link>Writing & Translation</Link>
                        <Link>Video & Animation</Link>
                        <Link>Music & Audio</Link>
                        <Link>Programming & Tech</Link>
                        <Link>Data</Link>
                        <Link>Business</Link>
                        <Link>Lifestyle</Link>
                        <Link>Photography</Link>
                        <Link>Sitemap</Link>
                    </div>
                    <div className="categories">
                        <h2>Categories</h2>
                        <Link>Graphics & Design</Link>
                        <Link>Digital Marketing</Link>
                        <Link>Writing & Translation</Link>
                        <Link>Video & Animation</Link>
                        <Link>Music & Audio</Link>
                        <Link>Programming & Tech</Link>
                        <Link>Data</Link>
                        <Link>Business</Link>
                        <Link>Lifestyle</Link>
                        <Link>Photography</Link>
                        <Link>Sitemap</Link>
                    </div>
                    <div className="categories">
                        <h2>Categories</h2>
                        <Link>Graphics & Design</Link>
                        <Link>Digital Marketing</Link>
                        <Link>Writing & Translation</Link>
                        <Link>Video & Animation</Link>
                        <Link>Music & Audio</Link>
                        <Link>Programming & Tech</Link>
                        <Link>Data</Link>
                        <Link>Business</Link>
                        <Link>Lifestyle</Link>
                        <Link>Photography</Link>
                        <Link>Sitemap</Link>
                    </div>
                    <div className="categories">
                        <h2>Categories</h2>
                        <Link>Graphics & Design</Link>
                        <Link>Digital Marketing</Link>
                        <Link>Writing & Translation</Link>
                        <Link>Video & Animation</Link>
                        <Link>Music & Audio</Link>
                        <Link>Programming & Tech</Link>
                        <Link>Data</Link>
                        <Link>Business</Link>
                        <Link>Lifestyle</Link>
                        <Link>Photography</Link>
                        <Link>Sitemap</Link>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h1>fiverr</h1>
                        <span>© Fiverr International Ltd. 2023</span>
                    </div>

                    <div className="right">
                        <div className="social">
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                            <img src={linkedIn} alt="" />
                            <img src={pinterest} alt="" />
                            <img src={instagram} alt="" />
                        </div>

                        <div className="support">
                            <div className="language">
                                <img src={language} alt="" />
                                <span>English</span>
                            </div>

                            <div style={{ fontWeight: 500 }}>
                                <span>$</span>
                                <span style={{ marginLeft: "5px" }}>USD</span>
                            </div>
                            <img src={accessibility} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
