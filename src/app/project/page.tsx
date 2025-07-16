
'use client';

import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
    {
        title: "LanderOS",
        description: "A comprehensive operating system simulation built with web technologies.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project LanderOS",
        link: "#"
    },
    {
        title: "Alter",
        description: "An innovative e-commerce platform with a focus on user experience.",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Alter",
        link: "#"
    },
    {
        title: "Portfoy",
        description: "A personal portfolio site showcasing creative works and projects.",
        imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Portfoy",
        link: "#"
    },
    {
        title: "Project X",
        description: "A cutting-edge AI solution for predictive analytics.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project X",
        link: "#"
    },
    {
        title: "Green Thumb",
        description: "A mobile application for urban gardening enthusiasts.",
        imageUrl: "https://images.unsplash.com/photo-1533035312389-9a70f3f2271c?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Green Thumb",
        link: "#"
    },
    {
        title: "Health Tracker",
        description: "A robust health monitoring system with data visualization.",
        imageUrl: "https://images.unsplash.com/photo-1533227409214-41d3b900609d?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Health Tracker",
        link: "#"
    },
];

const ProjectPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-[#f0f4f8] font-inter">
            {/* Header Section (will be copied from landing_page.tsx) */}
            <header className="flex items-center justify-between w-full p-4 my-2">
                <div className="font-playfair-display text-xl font-semibold !text-black opacity-100">
                    Rievan Averillio
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot"></span>
                        <span>available for work</span>
                    </div>
                    <div className="flex space-x-3">
                        <a href="https://www.instagram.com/rievanavrellio/" target="_blank" rel="noopener noreferrer" className="icon-button text-black p-2 hover:bg-gray-200 rounded-full">
                        <Instagram width="22" height="22" />
                        </a>
                        <a href="https://www.linkedin.com/in/rievanavrellio" target="_blank" rel="noopener noreferrer" className="icon-button text-black p-2 hover:bg-gray-200 rounded-full">
                        <Linkedin width="22" height="22" />
                        </a>
                        <a href="https://www.facebook.com/rievan.averiilio" target="_blank" rel="noopener noreferrer" className="icon-button text-black p-2 hover:bg-gray-200 rounded-full">
                        <Facebook width="22" height="22" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Projects Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex-1 flex flex-col items-center justify-center p-8">
                <h1 className="text-5xl font-playfair-display font-bold text-gray-800 mb-12">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    {portfolioItems.map((item, index) => (
                        <motion.a 
                            key={index}
                            href={item.link} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="block">
                            <div
                                className="w-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 transition transform hover:scale-105 duration-300 cursor-pointer font-inter shadow-lg"
                            >
                                <div className="m-3 rounded-xl overflow-hidden">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.altText}
                                        width={600}
                                        height={240}
                                        className="w-full h-60 object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    <div className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
                                        <span className="text-sm font-medium">View Project</span>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.section>

            {/* Custom CSS (will be copied from landing_page.tsx) */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');

                .font-inter { font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif; }
                .font-playfair-display { font-family: 'Playfair Display', serif; }

                .button-gradient-dark {
                    background: linear-gradient(145deg, #3b426e, #2a3050);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                .button-gradient-dark:hover {
                    background: linear-gradient(145deg, #4a5180, #3a4060);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                }

                .button-gradient-light {
                    background: linear-gradient(145deg, #e0e7ef, #ffffff);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    transition: all 0.3s ease;
                }
                .button-gradient-light:hover {
                    background: linear-gradient(145deg, #eaf1f8, #f8f8f8);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                .icon-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(5px);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    transition: all 0.2s ease;
                    border: 1px solid rgba(255, 255, 255, 0.6);
                }
                .icon-button:hover {
                    background-color: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transform: translateY(-1px);
                }

                .profile-image-container {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .profile-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 16px;
                }

                .app-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #ffffff;
                }
                .app-icon img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .app-icon.cloud { background: linear-gradient(135deg, #87CEEB, #ADD8E6); }
                .app-icon.moon { background: linear-gradient(135deg, #4682B4, #6A5ACD); }

                @media (max-width: 768px) {
                    .text-5xl { font-size: 2.5rem; }
                    .text-6xl { font-size: 3.5rem; }
                }
                @media (max-width: 480px) {
                    .text-5xl { font-size: 2rem; }
                    .text-6xl { font-size: 3rem; }
                    .app-icon { width: 50px; height: 50px; border-radius: 14px; }
                    .profile-image-container { width: 40px; height: 40px; border-radius: 12px; }
                }

                .animate-pulse-dot { animation: pulse-dot 1.2s infinite; }
                @keyframes pulse-dot {
                    0% { box-shadow: 0 0 0 0 rgba(34,197,94, 0.7); }
                    70% { box-shadow: 0 0 0 8px rgba(34,197,94, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(34,197,94, 0); }
                }

                .portfolio-carousel-outer {
                    width: 100vw;
                    overflow: hidden;
                    position: relative;
                }
                .portfolio-carousel-inner {
                    display: flex;
                    gap: 2rem;
                    width: max-content;
                    animation: carousel-scroll 24s linear infinite;
                }
                @keyframes carousel-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .portfolio-fade-left, .portfolio-fade-right {
                    position: absolute;
                    top: 0; bottom: 0;
                    width: 60px;
                    z-index: 2;
                    pointer-events: none;
                }
                .portfolio-fade-left { left: 0; background: linear-gradient(90deg, #f0f4f8 80%, transparent); }
                .portfolio-fade-right { right: 0; background: linear-gradient(-90deg, #f0f4f8 80%, transparent); }
                
                .glass-card {
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(18px) saturate(180%);
                    -webkit-backdrop-filter: blur(18px) saturate(180%);
                    border: 1.5px solid rgba(255,255,255,0.18);
                }
            `}</style>
        </div>
    );
};

export default ProjectPage; 