import React from "react";
import backgrnd from "../assets/background.svg"

export default function MainContent() {
    return (
        <div className="pt-28 pb-12 px-5 sm:px-20 flex flex-col">
            <img src={backgrnd} alt="background" className="m-auto w-full" />
            <p className="text-3xl sm:text-6xl font-bold mt-16 font-[Poppins]">Online Experiences</p>
            <p className="mt-6 text-md sm:text-3xl text-[#333333] w-3/5 font-[Poppins] font-light">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}