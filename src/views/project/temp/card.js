import React from 'react';
import { Link } from "react-router-dom";

function Card({ img, title, desc, category, slug, href }) {
    return(
        <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-2">
            <Link to={"/project/game/" + slug }><img alt="content" src={img} /></Link>
            <div className="flex items-center">
                <div className="pt-3 lg:pt-0">                    
                    <Link to={"/project/game/" + slug } className="space-y-2">
                        <h1 className="text-2xl font-playfair">{title}</h1>
                        <p className="font-light text-sm font-source">{desc.substr(0, 150)}...</p>
                    </Link>
                    <div className="flex items-center space-x-3">
                        <Link to={"/project/game/" + slug } className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">{category}</Link>
                        <Link to={"/project/game/" + slug } className="underline font-semibold text-xs font-source">show detail</Link>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Card;