import React from "react";
import logo from "../assets/airbnb_logo.svg"

export default function NavBar() {
    return (
        <div className="shadow-md md:pl-16 py-5 flex fixed w-full bg-white z-40">
            <a href={process.env.PUBLIC_URL + "/"} className="w-3/12 sm:w-2/12 md:w-1/12 mx-auto md:mx-0">
                <img src={logo} alt="airbnb logo" className="w-full" />
            </a>
        </div>
    )
}