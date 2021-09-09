import React from 'react';
import { Link } from "react-router-dom";

function CardGame({ img, title, desc, category, href, slug, }) {
    return(
        <div className="space-y-2">
            <Link to={"/project/game/" + slug }><img alt="hero1" src={img} /> </Link>
            <h1 className="font-playfair pt-1 text-xl">{title}</h1>
            <p className="font-source opacity-75 font-light text-sm">{desc.substr(0, 150)}...</p>
            <div className="flex items-center space-x-3">
                <a href={href} className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">{category}</a>
                <a href={href} className="underline font-semibold text-xs font-source">show detail</a>
            </div>
        </div>
    );
}

export default CardGame;