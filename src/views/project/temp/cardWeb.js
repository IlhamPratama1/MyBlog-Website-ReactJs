import React from 'react';
import { Link } from "react-router-dom";

function CardWeb({ img, title, desc, href, slug}) {
    return(
        <div className="space-y-2">
            <Link to={"/project/website/" + slug }><img alt="hero1" src={img} /></Link>
            <h1 className="font-playfair pt-1 text-2xl">{title}</h1>
            <p className="font-source font-light text-sm">{desc}</p>
            <a href={href} className="underline font-semibold text-sm font-source">show detail</a>
        </div>
    );
}

export default CardWeb;