import React from "react";
import logo from "../assets/airbnb_logo.svg"

export default function NavBar() {
    return (
        <div className="shadow-md pl-16 py-5 flex fixed w-full bg-white z-40">
            <a href="/" className="w-1/12">
                <img src={logo} alt="airbnb logo" className="w-full" />
            </a>
        </div>
    )
}