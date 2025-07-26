"use client";

import { useState } from "react";

import { Testimonial } from "@/lib/types";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';


interface Float {
    x: number;
    y: number;
    rotation: number;
}

const defaultFloat = { x: 0, y: 0, rotation: 0 };


export default function TestimonialCard({ testimonial, left = "auto", top = "auto", float = defaultFloat, index = 0 }: { testimonial: Testimonial, left?: string, top?: string, float?: Float, index?: number }) {
    const [isHovered, setHoveredCard] = useState<boolean>(false);

    const handleCardClick = (linkedinUrl: string) => {
        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            key={testimonial.id}
            className={
                `absolute transition-all duration-500 ease-out cursor-pointer ${isHovered ? 'z-50 scale-105' : 'z-10'}`
            }
            style={{
                left: left,
                top: top,
                transform: `translate(${float.x}px, ${float.y}px) rotate(${float.rotation}deg) ${isHovered ? `scale(1.05) rotate(0deg)` : ''
                    }`,
                animation: `float-${index} 6s ease-in-out infinite`
            }}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
            onClick={() => handleCardClick(testimonial.linkedinUrl)}
        >
            {/* Twitter-style Card */}
            <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-80 transition-all duration-300 ${isHovered ? 'shadow-2xl border-blue-200' : ''}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <div className="flex items-center space-x-1">
                                <h3 className="font-bold text-gray-900 text-sm">{testimonial.name}</h3>
                                {testimonial.verified && (
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <span className="text-sm">{testimonial.time}</span>
                        <MoreHorizontal className="w-4 h-4" />
                    </div>
                </div>

                {/* Content */}
                <p className="text-gray-800 text-sm leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: testimonial.content }}
                >
                    {/* {testimonial.content} */}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{testimonial.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                        <Repeat2 className="w-4 h-4" />
                        <span className="text-sm">{testimonial.retweets}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{testimonial.likes}</span>
                    </div>
                    <Share className="w-4 h-4 hover:text-blue-500 transition-colors cursor-pointer" />
                </div>
            </div>

            {/* Hover indicator */}
            {isHovered && (
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                    Click to visit LinkedIn
                </div>
            )}
            {/* Custom CSS for floating animations */}
            <style jsx>
                {
                    `
                        @keyframes float-0 {
                        0%, 100% { transform: translate(15px, 10px) rotate(-3deg) translateY(0px); }
                        50% { transform: translate(15px, 10px) rotate(-3deg) translateY(-10px); }
                        }
                        @keyframes float-1 {
                        0%, 100% { transform: translate(-12px, 25px) rotate(2deg) translateY(0px); }
                        50% { transform: translate(-12px, 25px) rotate(2deg) translateY(-8px); }
                        }
                        @keyframes float-2 {
                        0%, 100% { transform: translate(20px, -15px) rotate(1deg) translateY(0px); }
                        50% { transform: translate(20px, -15px) rotate(1deg) translateY(-12px); }
                        }
                        @keyframes float-3 {
                        0%, 100% { transform: translate(-18px, 5px) rotate(-2deg) translateY(0px); }
                        50% { transform: translate(-18px, 5px) rotate(-2deg) translateY(-9px); }
                        }
                        @keyframes float-4 {
                        0%, 100% { transform: translate(8px, 30px) rotate(3deg) translateY(0px); }
                        50% { transform: translate(8px, 30px) rotate(3deg) translateY(-11px); }
                        }
                    `
                }
            </style>
        </div>
    );
}