import React from "react";
import data from "../data.js"
import Card from "./Card.js";

export default function Experiences() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                coverImg={item.coverImg}
                title={item.title}
                stats={item.stats}
                price={item.price}
            />
        )
    })

    return (
        <div className="sm:grid sm:grid-cols-3 gap-10 group sm:w-fit m-auto pb-10 sm:pb-28 pt-5 sm:pt-14 sm:px-16">
            {cards}
        </div>
    )
}