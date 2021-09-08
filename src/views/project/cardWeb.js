import React from 'react';

function CardWeb({ img, title, desc, href}) {
    return(
        <div className="space-y-2">
            <img alt="hero1" src={img} />
            <h1 className="font-playfair pt-1 text-2xl">{title}</h1>
            <p className="font-source opacity-75 font-light text-sm">{desc}</p>
            <a href={href} className="underline font-semibold text-sm font-source">show detail</a>
        </div>
    );
}

export default CardWeb;