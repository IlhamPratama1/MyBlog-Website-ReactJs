import React from 'react';

function CardGame({ img, title, desc, category, href }) {
    return(
        <div className="space-y-2">
            <a href={href}><img alt="hero1" src={img} /> </a>
            <h1 className="font-playfair pt-1 text-xl">{title}</h1>
            <p className="font-source opacity-75 font-light text-sm">{desc}</p>
            <div className="flex items-center space-x-3">
                <a href={href} className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">{category}</a>
                <a href={href} className="underline font-semibold text-xs font-source">show detail</a>
            </div>
        </div>
    );
}

export default CardGame;