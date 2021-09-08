import React, { useEffect, useState } from 'react';
import CardGame from './cardGame';
import CardWeb from './cardWeb';
import axiosInstance from '../../axios';

function ProjectContent() {
    const [games, setGames] = useState({ isLoading: true, data: [''] });
    const [websites, setWebsites] = useState({ isLoading: true, websites: [''] });

    useEffect(() => {
		axiosInstance.get('project/game/').then((res) => {
            const allData = res.data;
            setGames({
                isLoading: false,
                data: allData
            });
            console.log(allData);
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
            console.log(allData);
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
	}, []);

    return(
        <div className="px-12 md:px-40 space-y-6">
            <h1 className="font-playfair font-bold text-3xl">Games</h1>
            <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
                {games.isLoading ?
                    <p>Retrieving Data</p> :
                    games.data.map((game) => {
                        return (
                            <CardGame 
                                img={game.game_image[0].image}
                                title={game.title}
                                desc={game.desc}
                                category={game.category_name}
                                href={game.href}
                            />
                            ); 
                        })
                }
            </div>
            <h1 className="pt-6 font-playfair font-bold text-3xl">Website</h1>
            <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
                {websites.isLoading ?
                    <p>Retrieving Data</p> :
                    websites.data.map((web) => {
                        return (
                            <CardWeb 
                                img={web.website_image[0].image}
                                title={web.title}
                                desc={web.desc}
                                href={web.href}
                            />
                        ); 
                    })
                }
            </div>
        </div>
    );
}

export default ProjectContent;