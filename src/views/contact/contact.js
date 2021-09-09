import React from 'react';

function ContactSection() {
    return(
        <div className="my-20 flex items-center h-screen px-12 md:px-40">
            <div className="text-center">
                <h1 className=" font-playfair text-3xl lg:text-5xl">Contact Me</h1>
                <img className="mx-auto w-full lg:w-2/5" alt="contact" src="/static/images/ilustration/Webinar-pana.svg" />
                <p className="mb-6 mx-auto font-source font-light text-md w-full lg:text-lg lg:w-2/5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                <a href="/" className="text-sm font-bold font-playfair py-3 px-8 bg-black-second hover:bg-black-third text-white-second hover:text-white-main transition duration-300">Get in Touch</a>
            </div>
        </div>
    );
}

export default ContactSection;