import React, { useEffect, useState } from "react";
import "./Navbar.scss";

import user from "../../assets/user.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await newRequest.post("auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <div
            className={active || pathname !== "/" ? "navbar active" : "navbar"}
        >
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="text">fiverR</span>
                    </Link>

                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>FiverR Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>
                        <Link to="/login">Sign in</Link>
                    </span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && (
                        <button>
                            <Link to="/register">Join</Link>
                        </button>
                    )}
                    {currentUser && (
                        <div
                            className="user"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <img src={currentUser?.img || user} alt="" />
                            <span>{currentUser?.username}</span>

                            {showMenu && (
                                <div className="options">
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link to="/mygigs">Gigs</Link>
                                            <Link to="/add">Add New Gig</Link>
                                        </>
                                    )}
                                    <Link to="/orders">Orders</Link>
                                    <Link to="/messages">Messages</Link>
                                    <Link onClick={handleLogout}>Logout</Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link to="/">Graphics and Design</Link>
                        <Link to="/"> Video and Animation</Link>
                        <Link to="/">Writing & Translation</Link>
                        <Link to="/">AI Services</Link>
                        <Link to="/">Music & Audio</Link>
                        <Link to="/">Programming & Tech</Link>
                        <Link to="/">Business</Link>
                        <Link to="/">Lifestyle</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
