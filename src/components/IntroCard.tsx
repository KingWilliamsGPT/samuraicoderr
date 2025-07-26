"use client";

import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Globe } from 'lucide-react';

export default function IntroCard() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="mt-8 md:mt-10">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square md:aspect-[16/9]">
                {/* Background image and overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Background"
                        decoding="async"
                        className="object-cover"
                        src="/me-with-girls.jpg"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: 'cover',
                            objectPosition: '85% center',
                            color: 'transparent',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Testimonial floating card (desktop only) */}
                <div className="absolute inset-0 z-10 hide-w-434 pointer-events-none">
                    <div className="relative w-full h-full max-w-7xl mx-auto px-4">
                        <TestimonialCard
                            testimonial={{
                                id: 1,
                                name: 'Williams Samuel',
                                handle: 'samuraicoderr',
                                avatar: '/me.jpg',
                                linkedinUrl: 'https://www.linkedin.com/in/samuraicoderr/',
                                content: "Software development is not just about creating software, it's an <b>art of problem-solving</b> and innovation, one of the many reasons I exists",
                                verified: true,
                                likes: "2k",
                                retweets: "700",
                                comments: "1k",
                                time: "3 yrs"
                            }}
                            // left={"60%"}
                            // top={"30%"}
                            left={isMobile ? "20%" : "60%"}
                            top={isMobile ? "40%" : "30%"}
                            float={{ x: 0, y: 0, rotation: 0 }}
                            index={1}
                        />
                    </div>
                </div>

                {/* Text Content (visible on all screens) */}
                <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8">
                    <div className="text-white">
                        <h2 className="font-medium uppercase tracking-wider flex items-center text-sm sm:text-base">
                            <Globe className="h-4 w-4 mr-2" />
                            About me
                        </h2>
                        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            hey, I'm Williams
                            <span className="wave inline-block ml-2">👋</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-light leading-relaxed max-w-[400px]">
                            I am a software developer with a passion for creating innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
