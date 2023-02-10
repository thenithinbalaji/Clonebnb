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
        <div className="flex justify-evenly overflow-hidden mb-20 group">
            {cards}
        </div>
    )
}