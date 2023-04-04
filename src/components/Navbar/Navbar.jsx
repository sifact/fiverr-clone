import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { createBrowserRouter } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        userName: "John Doe",
        isSeller: true,
    };

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <span className="text">fiverR</span>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>FiverR Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user">
                            <img src="" alt="" />
                            <span>{currentUser?.userName}</span>
                            <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                    </>
                                )}
                            </div>
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>
                    )}
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
