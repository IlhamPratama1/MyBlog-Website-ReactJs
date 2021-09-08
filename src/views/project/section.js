import React from 'react';

export default function ProjectSection() {
    return(
        <div className="flex items-center pt-4 h-screen px-12 md:px-40">
            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-6">
                        <h1 className="font-playfair text-3xl text-center lg:text-5xl lg:text-left">My Project</h1>
                        <p className="font-source font-light text-md lg:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    </div>
                </div>
                <div>
                    <img className="float-right w-full lg:w-4/5 show" alt="project" src="/static/images/ilustration/Exams-bro.svg" />
                </div>
            </div>
        </div>
    );
}