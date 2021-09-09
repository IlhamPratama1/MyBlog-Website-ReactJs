import React, { useEffect, useState } from 'react';
import CardWeb from './temp/cardWeb';
import Card from './temp/card';
import CardGame from './temp/cardGame';
import CardHeroSkeleton from './skeleton/cardHeroSkeleton';
import CardSkeleton from './skeleton/cardSkeleton';
import CardGameSkeleton from './skeleton/cardGameSkeleton';
import axiosInstance from '../../axios';
import { Link } from "react-router-dom";
import CardWebSkeleton from './skeleton/cardWebSkeleton';

function ProjectContent() {
    const [games, setGames] = useState({ isLoading: true, data: [''] });
    const [websites, setWebsites] = useState({ isLoading: true, websites: [''] });
    const [length, setLength] = useState(0);

    useEffect(() => {
		axiosInstance.get('project/game/').then((res) => {
            const allData = res.data;
            setGames({
                isLoading: false,
                data: allData
            });
            setLength(allData.length - 1);
            console.log(length);
        })
        .catch(function(error) {
            if (error.response) {
                // Request made and server responded
                if(error.response.status === 401) {

                }
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        });

        axiosInstance.get('project/website/').then((res) => {
            const allData = res.data;
            setWebsites({
                isLoading: false,
                data: allData
            });
        })
        .catch(function(error) {
            if (error.response) {
                // Request made and server responded
                if(error.response.status === 401) {

                }
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        });
	}, [length]);

    return(
        <div className="mb-40 px-12 md:px-40 space-y-10">
            <h1 className="font-playfair font-bold text-4xl">Games</h1>
            <div className="grid gap-x-14 gap-y-10 grid-cols-1 lg:grid-cols-2">
                <div className="space-y-6">                    
                    {games.isLoading ?
                        <CardHeroSkeleton /> :
                        <div className="space-y-3">
                            <Link to={"/project/game/" + games.data[length].slug }><img alt="content" src={games.data[length].game_image[0].image} /></Link>
                            <div className="flex items-center space-x-3 pb-2">
                                <Link to={"/project/game/" + games.data[length].slug } className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">{games.data[length].category_name}</Link>
                            </div>
                            <Link to={"/project/game/" + games.data[length].slug } className="space-y-3">
                                <h1 className="text-3xl font-playfair">{games.data[length].title}</h1>
                                <p className="font-light text-sm font-source">{games.data[length].content.substr(0, 600)}...</p>
                            </Link>
                        </div>
                    }
                </div> 
                <div className="space-y-10">
                    {games.isLoading ?
                        <div className="space-y-10">
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </div> :
                        games.data.map((game) => {
                            return (
                                <Card 
                                    key={game.id}
                                    img={game.game_image[0].image}
                                    title={game.title}
                                    desc={game.desc}
                                    category={game.category_name}
                                    href={game.href}
                                    slug={game.slug}
                                />
                                ); 
                            }).slice(0, 3)
                    }
                </div>               
            </div>
            {games.isLoading ?
                <div className="grid gap-x-14 gap-y-10 grid-cols-1 lg:grid-cols-4">
                    <CardGameSkeleton />
                    <CardGameSkeleton />
                    <CardGameSkeleton />
                    <CardGameSkeleton />
                </div> :
                <div className="grid gap-x-14 gap-y-10 grid-cols-1 lg:grid-cols-4"> {
                    games.data.map((game) => {
                        return (
                            <CardGame 
                                key={game.id}
                                img={game.game_image[0].image}
                                title={game.title}
                                desc={game.desc}
                                category={game.category_name}
                                href={game.href}
                                slug={game.slug}
                            />
                        ); 
                    }).slice(3, 7)}
                </div>
            }        
            <h1 className="pt-6 font-playfair font-bold text-4xl">Website</h1>
                {websites.isLoading ?
                    <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
                        <CardWebSkeleton />
                        <CardWebSkeleton />
                        <CardWebSkeleton />
                    </div> :
                    <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
                        {websites.data.map((web) => {
                            return (
                                <CardWeb 
                                    key={web.id}
                                    img={web.website_image[0].image}
                                    title={web.title}
                                    desc={web.desc}
                                    href={web.href}
                                    slug={web.slug}
                                />
                        ); 
                    })}
                    </div>
                }
        </div>
    );
}

export default ProjectContent;