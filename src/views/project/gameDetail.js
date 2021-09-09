import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';

export default function GameDetail() {
    const { slug } = useParams();
    const [ detail, setData ] = useState({ isLoading: true, data: [''] });

    useEffect(() => {
		axiosInstance.get('project/game/' + slug + "/").then((res) => {
            const allData = res.data;
            setData({
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
	}, [slug]);

    return(
        <div>
            <div className="h-full bg-black">
                <div className="px-8 lg:px-40">
                    {detail.isLoading ? <div>retrieving data</div> : 
                        <img className="w-120" src={detail.data.game_image[0].image} alt="game" />
                    }
                </div>
            </div>
            {detail.isLoading ? <div></div> : 
                <div className="px-8 py-4 space-y-4 lg:px-40 lg:py-16">
                    <h1 className="font-playfair font-bold text-3xl">Games</h1>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                        <div className="col-span-1 space-y-4">
                            <a href={detail.data.href} className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">{detail.data.category_name}</a>
                            <p className="font-source opacity-75 font-light text-sm">{detail.data.desc}</p>
                            <h1 className="font-playfair pt-1 text-xl">Url</h1>
                            <a href={detail.data.href} className="font-source opacity-75 font-light text-sm">{detail.data.href}</a>
                        </div>
                        <div className="col-span-2 space-y-3">
                            <h1 className="font-playfair text-xl">Description</h1>
                            <p className="font-source opacity-75 font-light text-sm">{detail.data.content}</p>
                        </div>
                    </div>                    
                </div>
            }
            {detail.isLoading ? <div></div> : 
                <div className="h-96">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                        {detail.data.game_image.map((img) => {
                            return(
                                <img key={img.id} alt="game" src={img.image} />
                            )}
                        )}
                    </div>
                </div>
            }
        </div>
    );
}