import Card from './card';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axios';


export default function BlogContent() {
    const [posts, setPosts] = useState({ isLoading: true, data: [''] });

    useEffect(() => {
		axiosInstance.get('api/posts/').then((res) => {
            const allPosts = res.data;
            setPosts({
                isLoading: false,
                data: allPosts
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
	}, []);
    
    return(
        <div className="pt-4 mx-auto px-12 md:px-40">
            <div className="grid gap-x-14 gap-y-10 grid-cols-1 lg:grid-cols-2">
                <div className="space-y-6">
                    <h1 className="font-playfair font-bold text-3xl">Games</h1>
                    <div className="space-y-3">
                        <a href="/"><img alt="content" src={posts.data[0].image} /></a>
                        <div className="flex items-center space-x-3 pb-2">
                            <a href="/" className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">social</a>
                            <p className="text-xs font-source opacity-75">{posts.data[0].duration} min to read</p>
                        </div>
                        <a href="/" className="space-y-3">
                            <h1 className="text-3xl font-playfair">{posts.data[0].title}</h1>
                            <p className="font-light text-sm font-source">{posts.data[0].content}</p>
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h1 className="font-playfair font-bold text-3xl">By Category</h1>
                    {posts.isLoading ?
                        <p>Retrieving Data</p> :
                        posts.data.map((post) => {
                            return (
                                <Card
                                    key={post.id}
                                    img={post.image}
                                    title={post.title}
                                    desc={post.content}
                                    category={post.category_name}
                                    min={post.duration} 
                                    href="/"
                                />
                            ); 
                        }).slice(1, 4)
                    }
                </div>
            </div>
        </div>
    );
}