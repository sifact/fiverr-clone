import { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
