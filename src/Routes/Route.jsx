import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import Gig from "../pages/gig/Gig";
import Add from "../pages/add/Add";
import Messages from "../pages/messages/Messages";

import Gigs from "../pages/gigs/Gigs";

import Orders from "../pages/orders/Orders";
import Home from "../pages/home/Home";
import MyGigs from "../pages/myGigs/MyGigs";
import Message from "../pages/message/Message";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/gigs",
                element: <Gigs />,
            },
            {
                path: "/mygigs",
                element: <MyGigs />,
            },
            {
                path: "/gig/:id",
                element: <Gig />,
            },
            {
                path: "/add",
                element: <Add />,
            },
            {
                path: "/messages",
                element: <Messages />,
            },
            {
                path: "/message/123",
                element: <Message />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);
