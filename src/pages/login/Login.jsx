import React from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import newRequest from "../../utils/newRequest";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post("auth/login", {
                username,
                password,
            });
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/");
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign in to Fiverr</h1>
                {error && <p>{error}</p>}
                <label htmlFor="">username</label>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="">password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Continue</button>
                <p>
                    Not a member yet?
                    <Link to="/register">Join now</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
