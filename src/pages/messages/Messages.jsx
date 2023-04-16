import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };

    return (
        <div className="messages">
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Last Message</th>
                        <th>Date</th>

                        <th>Action</th>
                    </tr>
                    <tr className="active">
                        <td>Moshiur Sifat</td>
                        <td>
                            <Link to="/message/123">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, voluptate.
                            </Link>
                        </td>
                        <td>1 hour ago</td>
                        <td>
                            <button>Mark as read</button>
                        </td>
                    </tr>
                    <tr className="active">
                        <td>Moshiur Sifat</td>

                        <td>
                            <Link to="/message/123">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, voluptate.
                            </Link>
                        </td>

                        <td>1 hour ago</td>
                        <td>
                            <button>Mark as read</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Moshiur Sifat</td>
                        <td>
                            <Link to="/message/123">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, voluptate.
                            </Link>
                        </td>
                        <td>1 hour ago</td>
                        <td>{/* <button>Mark as read</button> */}</td>
                    </tr>
                    <tr>
                        <td>Moshiur Sifat</td>
                        <td>
                            <Link to="/message/123">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, voluptate.
                            </Link>
                        </td>
                        <td>1 hour ago</td>
                        <td>{/* <button>Mark as read</button> */}</td>
                    </tr>
                    <tr>
                        <td>Moshiur Sifat</td>
                        <td>
                            <Link to="/message/123">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, voluptate.
                            </Link>
                        </td>
                        <td>1 hour ago</td>
                        <td>{/* <button>Mark as read</button> */}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Messages;
