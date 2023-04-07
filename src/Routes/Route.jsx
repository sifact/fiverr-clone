import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import Gig from "../pages/gig/Gig";
import Add from "../pages/add/Add";
import Messages from "../pages/messages/Messages";
import MyGigs from "../pages/myGigs/myGigs";
import Gigs from "../pages/gigs/Gigs";

import Orders from "../pages/orders/Orders";
import Home from "../pages/home/Home";

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
                path: "/messages/:id",
                element: <Messages />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            // {
            //     path: "/",
            //     element: <Home />,
            // },
        ],
    },
]);
