import React from "react";
import star from "../assets/star.svg"

export default function Card(props) {

    return (
        <div className="flex flex-col gap-4 z-0 drop-shadow-xl group-hover:opacity-[0.90] hover:!opacity-100 hover:scale-[1.05] duration-500 mx-auto w-2/3 sm:w-fit mb-10 sm:mb-0">
            <div>
                <img src={`${process.env.PUBLIC_URL + "assets/" + props.coverImg}`} alt="thumbnail"
                    className="w-full sm:w-96 2xl:w-[35rem] mx-auto" />
            </div>

            <div className="flex flex-col gap-3 font-[Poppins] my-auto">

                <div className="flex gap-2 text-md md:text-lg lg:text-2xl">

                    <img src={star} alt="star" className="w-8" />
                    <p className="my-auto">{props.stats.rating.toFixed(1)} </p>
                    <p className="text-[#918E9B] font-light my-auto">({props.stats.reviewCount}) • India</p>

                </div>

                <p className="text-[222222] font-light text-xl lg:text-2xl">{props.title}</p>

                <div className="flex text-xs sm:text-sm md:text-lg lg:text-2xl">
                    <p className="text-[222222] font-bold">From ${props.price}</p>
                    <p className="text-[222222] font-light">/person</p>
                </div>

            </div>
        </div>
    )
}