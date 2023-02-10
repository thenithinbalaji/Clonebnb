import React from "react";
import star from "../assets/star.svg"

export default function Card(props) {

    return (
        <div className="flex flex-col gap-4 group-hover:blur-sm hover:!blur-none z-0">
            <div>
                <img src={`${process.env.PUBLIC_URL + "assets/" + props.coverImg}`} alt="thumbnail" className="w-96" />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <img src={star} alt="star" className="w-8" />
                    <p className="text-2xl">{props.stats.rating.toFixed(1)} </p>
                    <p className="text-2xl text-[#918E9B] font-light">({props.stats.reviewCount}) • India</p>
                </div>

                <p className="text-2xl font-[Poppins] text-[222222] font-light">{props.title}</p>

                <div className="flex">
                    <p className="text-2xl font-[Poppins] text-[222222] font-bold">From ${props.price}</p>
                    <p className="text-2xl font-[Poppins] text-[222222] font-light">&nbsp;/ person</p>
                </div>
            </div>
        </div>
    )
}