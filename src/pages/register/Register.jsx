import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        phone: "",
        desc: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleSeller = (e) => {
        e.preventDefault();

        setUser((prev) => {
            return { ...prev, isSeller: e.target.checked };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);
        try {
            await newRequest.post("auth/register", {
                ...user,
                img: url,
            });
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register">
            <div className="container">
                <form onSubmit={handleSubmit} className="left">
                    <h1>Create a new account</h1>
                    <label htmlFor="">Username</label>
                    <input
                        name="username"
                        onChange={handleChange}
                        type="text"
                    />
                    <label htmlFor="">Email</label>
                    <input name="email" onChange={handleChange} type="email" />
                    <label htmlFor="">Password</label>
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                    />
                    <label htmlFor="">Profile Picture</label>
                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                    />
                    <label htmlFor="">Country</label>
                    <input name="country" onChange={handleChange} type="text" />
                    <button>Register</button>
                </form>
                <form className="right">
                    <h1>I want to become a seller</h1>
                    <div className="toggle">
                        <label htmlFor="">Activate the seller account</label>
                        <label htmlFor="">
                            <input type="checkbox" onChange={handleSeller} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <label htmlFor="">Phone Number</label>
                    <input
                        name="phone"
                        onChange={handleChange}
                        type="text"
                        placeholder="+1 234 547 89"
                    />
                    <label htmlFor="">Phone Number</label>
                    <textarea
                        name="desc"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        placeholder="A short description of yourself"
                    ></textarea>
                </form>
            </div>
        </div>
    );
};

export default Register;
