import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Body from "./components/Body.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <>
            <Navbar />
            <Body />
        </>
    </StrictMode>
);
