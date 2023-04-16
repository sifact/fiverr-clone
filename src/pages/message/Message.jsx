import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
    return (
        <div className="message">
            <div className="container">
                <span className="breadcrumbs">
                    <Link>MESSAGES > JOHN DOE ></Link>
                </span>
                <div className="messages">
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Perspiciatis sapiente vitae doloremque beatae
                            modi odio delectus quia labore soluta harum.
                        </p>
                    </div>
                    <div className="item owner">
                        <img
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Perspiciatis sapiente vitae doloremque beatae
                            modi odio delectus quia labore soluta harum.
                        </p>
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Perspiciatis sapiente vitae doloremque beatae
                            modi odio delectus quia labore soluta harum.
                        </p>
                    </div>
                    <div className="item owner">
                        <img
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Perspiciatis sapiente vitae doloremque beatae
                            modi odio delectus quia labore soluta harum.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea
                        placeholder="write a message"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Message;
