'use client';

import React, { useState } from 'react';
import { useLenisSmoothScroll } from '@/lib/useLenisSmoothScroll';
import { ChevronDown, Instagram, Linkedin, Facebook, ArrowRight, Download, Target, Layers, Monitor, Paintbrush, Send, LayoutGrid, ArrowUpDown, Check, Clock, HelpCircle, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// FAQ Item Component
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <button 
                className="w-full p-3 text-left flex justify-between items-center focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg text-gray-800">{question}</span>
                <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} stroke="black" />
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="p-6 pt-0 text-gray-600">
                    {answer}
                </div>
            </div>
        </div>
    );
};

// --- START: Data for Portfolio Carousel ---
const portfolioItems = [
    {
        title: "LanderOS",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project LanderOS"
    },
    {
        title: "Alter",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Alter"
    },
    {
        title: "Portfoy",
        imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Portfoy"
    },
];

const duplicatedItems = [...portfolioItems, ...portfolioItems];
// --- END: Data for Portfolio Carousel ---


const App: React.FC = () => {
    useLenisSmoothScroll();
    return (
        <div className="relative flex min-h-screen flex-col bg-[#f0f4f8] font-inter overflow-x-hidden">
            {/* Hero Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="bg-[#f0f4f8] min-h-screen w-full flex-1 flex flex-col"
            >
                {/* Header Section */}
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
                {/* Main content di tengah */}
                <div className="flex flex-1 items-center justify-center">
                    <section id="main" className="mb-12 w-full">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="mb-6 mt-16 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                        <div className="app-icon profile-image-container overflow-hidden">
                          <Image
                            src="/rievan.jpg"
                            alt="Rievan"
                            width={80}
                            height={80}
                            className="w-[80px] h-[80px] object-cover"
                          />
                        </div>
                        <h1 className="font-playfair-display text-5xl font-bold text-gray-900 md:text-6xl">
                          I&apos;m Rievan
                        </h1>
                      </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                            <h2 className="font-playfair-display text-5xl font-bold text-gray-900 md:text-6xl">
                                Averillio Fadhlan
                            </h2>
                            <div className="flex space-x-4">
                                <div className="app-icon cloud">
                                    <Image
                                        src="/programmer1.jpg"
                                        alt="programmer_app"
                                        width={80}
                                        height={80}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = 'https://placehold.co/80x80/87CEEB/FFFFFF?text=Cloud';
                                        }}
                                    />
                                </div>
                                <div className="app-icon programmer2">
                                    <Image
                                        src="/programmer2.jpg"
                                        alt="programmer_app"
                                        width={80}
                                        height={80}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = 'https://placehold.co/80x80/4682B4/FFFFFF?text=Moon';
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="mx-auto mt-8 mb-8 max-w-2xl text-lg text-gray-600 md:mt-4 sm:mt-8">
                            I specialize in building powerful web applications and AI solutions, creating cutting-edge technologies for startups and enterprises
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 sm:flex-col sm:space-y-4 mb-20">
                            <a href="/dokumen/CV Rievan.pdf" download className="button-gradient-dark flex items-center space-x-2 rounded-xl px-6 py-3 text-white shadow-lg transition-all hover:scale-105">
                                <Download />
                                <span>Get Curriculum Vitae</span>
                            </a>
                            <a href="/project" className="button-gradient-light flex items-center space-x-2 rounded-xl px-6 py-3 text-gray-800 shadow-lg transition-all hover:scale-105">
                                <span>See Projects</span>
                                <ArrowRight />
                            </a>
                        </motion.div>

                        {/* Portfolio Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            id="portfolio" className="w-full py-8 px-0 relative overflow-x-hidden">
                            <div className="portfolio-fade-left"></div>
                            <div className="portfolio-fade-right"></div>
                            <div className="portfolio-carousel-outer">
                                <div className="portfolio-carousel-inner" id="portfolio-carousel-inner">
                                    {duplicatedItems.map((item, index) => (
                                        <div
                                        key={index}
                                        className="max-w-lg w-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 transition transform hover:scale-105 duration-300 cursor-pointer font-inter"
                                        >

                                            <div className="m-3 rounded-xl overflow-hidden">
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={item.altText}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-80 object-cover"
                                                />
                                            </div>
                                            <div className="p-2 flex items-center justify-between font-inter">
                                                <h3 className="text-sm font-semibold text-gray-400 font-inter">{item.title}</h3>
                                                <span className="text-gray-500">
                                                    <ArrowRight size="32" />
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </motion.section>
            
            {/* --- START: Updated Services Section --- */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-[#e9edf1] py-16 px-4 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-10 text-center">
                <span className="px-5 py-1.5 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 mb-4 flex items-center">
                  <LayoutGrid width="16" height="16" className="mr-2" />
                  Services
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gray-800 mb-3">Web & AI Solutions</h2>
                <p className="text-gray-500 max-w-xl">Building powerful web applications and intelligent AI systems that drive business transformation</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Card 1: Full-Stack Development */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8">
                  <Image src="/fullstack_developer.jpg" alt="Full-Stack Development" width={400} height={300} className="w-full md:w-2/5 h-48 object-cover rounded-2xl" />
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                      <Monitor width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Full-Stack Development</h3>
                    <p className="text-gray-500 text-sm">Building robust, scalable web applications with modern frameworks like React, Node.js, and Next.js.</p>
                  </div>
                </motion.div>
                {/* Card 2: AI Implementation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
                    <Target width="24" height="24" fill="white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">AI Implementation</h3>
                  <p className="text-gray-500 text-sm">Integrating cutting-edge AI technologies into web applications, including machine learning models, LLMs, and intelligent data analysis.</p>
                </motion.div>
                {/* Card 3: Cloud Architecture */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
                    <Layers width="24" height="24" fill="none" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">Cloud Architecture</h3>
                  <p className="text-gray-500 text-sm">Designing and implementing scalable cloud solutions using AWS, Google Cloud, and Azure with infrastructure as code.</p>
                </motion.div>
                {/* Card 4: Custom AI Solutions */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 md:order-2">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                      <Paintbrush width="24" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Custom AI Solutions</h3>
                    <p className="text-gray-500 text-sm">Developing tailored AI applications for business automation, data analysis, and decision support.</p>
                  </div>
                  <Image src="/custom_ai_solution.jpg" alt="Custom AI Solutions" width={400} height={300} className="w-full md:w-2/5 h-48 object-cover rounded-2xl md:order-1" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex gap-4 mt-12 justify-center">
                <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer" className="button-gradient-dark flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                    <Send />
                    <span>Contact Me</span>
                </a>
                <a href="/project" className="bg-white flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-semibold shadow-lg border border-gray-200/80 hover:bg-gray-50 transition-all">
                    <span>See Projects</span>
                    <ArrowRight />
                </a>
              </motion.div>
            </motion.section>

            {/* Profile Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-[#f0f4f8] py-16 px-12 flex justify-center">
              <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 w-full px-0 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-white p-2 rounded-lg shadow max-w-xs mx-auto lg:mx-0 text-xs">
                  <div className="flex justify-center mb-6">
                    <div className="w-68 h-68 rounded2xl overflow-hidden shadow-lg">
                      <Image 
                        src="/rievan.jpg" 
                        alt="PIC_PROFILE" 
                        width={272}
                        height={272}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex p-2 items-center justify-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-dot"></div>
                      <span className="text-gray-600 text-sm">available for work</span>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-playfair-display">Rievan Averillio</h2>
                    <p className="text-gray-600 leading-relaxed">Full-Stack & AI Developer Based in Berlin.</p>
                  </div>
                  <div className="flex justify-center gap-4 mb-8">
                    <a href="https://linkedin.com/in/rievan-averillio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition cursor-pointer text-gray-700">
                      <Linkedin width="24" height="24" />
                    </a>
                    <a href="https://instagram.com/rievan.averillio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition cursor-pointer text-gray-700">
                      <Instagram width="24" height="24" />
                    </a>
                    <a href="https://facebook.com/rievan.averiilio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition cursor-pointer text-gray-700">
                      <Facebook width="24" height="24" />
                    </a>
                  </div>
                  <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer" className="w-40 bg-[#232a3d] text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1a2233] transition mb-4 mx-auto">
                    <ArrowRight />
                    Contact Me
                  </a>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-8">
                  <div>
                    <p className="text-gray-700 text-XL leading-relaxed mb-6 mt-5">
                      I&apos;m Rievan Averillio, a passionate Web &amp; AI Developer based in the dynamic city of Berlin, Germany. I combine advanced programming expertise with AI knowledge to build powerful digital solutions that solve real-world problems.
                    </p>
                    <hr className="border-1 border-dashed border-gray-900 mb-3" />
                    <div className="flex flex-wrap gap-3 mb-6">
                      {/* JAVASCRIPT */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#24292F] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#222">JS</text></svg>
                        Javascript
                      </span>
                      {/* PHP */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#6e4fa2] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#8993be"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#fff">PHP</text></svg>
                        PHP
                      </span>
                      {/* PYTHON */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#3776AB] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#3776AB"/><text x="3" y="22" fontSize="16" fontWeight="bold" fill="#FFD43B">Py</text></svg>
                        Python
                      </span>
                      {/* TYPESCRIPT */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#3178c6] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#3178c6"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">TS</text></svg>
                        Typescript
                      </span>
                      {/* LARAVEL */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#F9322C] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect x="4" y="20" width="8" height="8" fill="#fff"/><rect x="20" y="4" width="8" height="8" fill="#fff"/><rect x="12" y="12" width="8" height="8" fill="#fff"/></svg>
                        Laravel
                      </span>
                      {/* NODEJS */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#68A063] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#68A063"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">Node</text></svg>
                        Node.js
                      </span>
                      {/* NEXTJS */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#111] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><circle cx="16" cy="16" r="16" fill="#111"/><path d="M8 8l16 16" stroke="#fff" strokeWidth="2"/></svg>
                        Next
                      </span>
                      {/* REACT */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#20232a] text-[#61dafb]" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse rx="10" ry="4.5" transform="matrix(.866 .5 -.866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="10" ry="4.5" transform="matrix(.866 -.5 .866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="10" ry="4.5" transform="matrix(0 1 -1 0 16 16)" stroke="#61DAFB" strokeWidth="2"/></svg>
                        React
                      </span>
                      {/* TAILWINDCSS */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#06b6d4] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 12c2-4 8-4 10 0s-2 8-6 8-6-4-4-8z" fill="#fff"/></svg>
                        TailwindCSS
                      </span>
                      {/* BOOTSTRAP */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#7952B3] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#7952B3"/><text x="5" y="22" fontSize="16" fontWeight="bold" fill="#fff">B</text></svg>
                        Bootstrap
                      </span>
                      {/* VITE */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#646CFF] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 4l10 18H6L16 4z" fill="#fff"/><path d="M16 28a4 4 0 100-8 4 4 0 000 8z" fill="#FFD62E"/></svg>
                        Vite
                      </span>
                      {/* POSTGRES */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#336791] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#336791"/><path d="M23.5 19.5c-1.5 2-4.5 2.5-7.5 2.5s-6-0.5-7.5-2.5c-1.5-2 0-5 3-6.5 1.5-0.5 3.5-0.5 4.5-0.5s3 0 4.5 0.5c3 1.5 4.5 4.5 3 6.5z" fill="#fff"/></svg>
                        Postgres
                      </span>
                      {/* MYSQL */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#00758F] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#00758F"/><path d="M10 22c2-6 10-6 12 0" stroke="#fff" strokeWidth="2"/><circle cx="22" cy="12" r="2" fill="#fff"/></svg>
                        MySQL
                      </span>
                      {/* TENSORFLOW */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#FF6F00] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 4v24M16 16l8 4v8l-8-4-8 4v-8l8-4z" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                        TensorFlow
                      </span>
                      {/* DOCKER */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#2496ED] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#2496ED"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">🐳</text></svg>
                        Docker
                      </span>
                    </div>
                    <hr className="border-1 border-dashed border-gray-900" />
                  </div>
                    <div className="space-y-6">
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">Lead Developer</div>
                        <div className="flex-1 text-gray-600 text-center">TechNova AI</div>
                        <div className="w-20 text-right text-gray-500">2023</div>
                    </div>
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">AI Engineer</div>
                        <div className="flex-1 text-gray-600 text-center">DataMind Labs</div>
                        <div className="w-20 text-right text-gray-500">2021</div>
                    </div>
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">Full-Stack Developer</div>
                        <div className="flex-1 text-gray-600 text-center">CloudSphere</div>
                        <div className="w-20 text-right text-gray-500">2024</div>
                    </div>
                    </div>

                </motion.div>
              </div>
            </motion.section>

            {/* Comparison Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-[#e9f0f8] py-16 flex justify-center mx-3">
              <div className="w-full max-w-5xl px-4">
                <div className="flex flex-col items-center mb-8 text-center">
                  <span className="px-5 py-1.5 mb-6 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 flex items-center">
                    <ArrowUpDown width="16" height="16" className="mr-2" />
                    Comparison
                  </span>
                  <h2 className="text-5xl font-playfair-display font-bold text-gray-800 mb-3">Advanced vs Basic</h2>
                  <p className="text-gray-600 max-w-xl mb-12">Advanced AI-driven development compared to traditional coding approaches.</p>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    {/* Me Column */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-white rounded-xl p-8 shadow-lg">
                      <h3 className="font-playfair-display text-2xl font-bold text-center mb-10 text-gray-800">Me</h3>
                      <hr className="border-1 border-dashed border-gray-400 mb-3" />
                      <div className="border-t border-gray-100 pt-2">
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Custom, high-performance websites</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Pixel-perfect UI/UX design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">AI-powered solutions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Advanced ML integration</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Cloud-native architecture</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Real-time data processing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Automated testing & deployment</span>
                          </li>
                        </ul>
                      </div>
                      <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-[#232a3d] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#1a2233] transition">
                        <ArrowRight width="18" height="18" />
                        <span>Contact Me</span>
                      </a>
                    </motion.div>
                    
                    {/* Others Column */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-white rounded-xl p-8 shadow-lg h-fit">
                      <h3 className="font-playfair-display text-2xl font-bold text-center mb-10 text-gray-800">Others</h3>
                      <hr className="border-1 border-dashed border-gray-400 mb-3" />
                      <div className="border-t border-gray-100 pt-2">
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                            <span className="text-gray-500">Standard coding only</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                            <span className="text-gray-500">Basic web development</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                            <span className="text-gray-500">No AI integration</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                            <span className="text-gray-500">Limited data processing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                            <span className="text-gray-500">Manual deployments</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                            <span className="text-gray-500">Limited automation capabilities</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Process Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-[#f0f4f8] py-16 flex justify-center mx-3">
              <div className="w-full max-w-5xl px-4">
                <div className="flex flex-col items-center mb-10 text-center">
                  <span className="px-5 py-1.5 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 mb-4 flex items-center">
                    <Clock width="16" height="16" className="mr-2" />
                    Process
                  </span>
                  <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gray-800 mb-3">From Concept to Solution</h2>
                  <p className="text-gray-600 max-w-xl">A streamlined development process that ensures robust, intelligent solutions for every project</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {/* Step 1 */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-white rounded-xl p-8 shadow-lg relative">
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                        01
                      </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Project Discovery</h3>
                    <p className="text-gray-600">Initial consultation to understand your business needs, technical requirements, and project goals</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step1</span>
                    </div>
                  </motion.div>
                  
                  {/* Step 2 */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-white rounded-xl p-8 shadow-lg relative">
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                        02
                      </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Architecture & Planning</h3>
                    <p className="text-gray-600">Developing technical architecture, selecting frameworks, and planning AI integration for your custom solution</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step2</span>
                    </div>
                  </motion.div>
                  
                  {/* Step 3 */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-white rounded-xl p-8 shadow-lg relative">
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                        03
                      </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Development & AI Training</h3>
                    <p className="text-gray-600">Building robust code, implementing AI models, and creating intelligent systems with continuous testing</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step3</span>
                    </div>
                  </motion.div>
                  
                  {/* Step 4 */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-white rounded-xl p-8 shadow-lg relative">
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                        04
                      </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Deployment & Optimization</h3>
                    <p className="text-gray-600">Launching your solution to production, with continuous monitoring, optimization and technical support</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step4</span>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex gap-4 mt-12 justify-center">
                  <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition-all">
                    <ArrowRight width="18" height="18" />
                    <span>Contact Me</span>
                  </a>
                  <a href="/project" className="bg-white flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-semibold shadow-lg border border-gray-200/80 hover:bg-gray-50 transition-all">
                    <span>See Projects</span>
                    <ArrowRight width="18" height="18" />
                  </a>
                </motion.div>
              </div>
            </motion.section>

            {/* FAQs Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-[#e9f0f8] py-16 flex justify-center mx-3">
              <div className="w-full max-w-5xl px-4">
                <div className="flex flex-col items-center mb-10 text-center">
                  <span className="px-5 py-1.5 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 mb-4 flex items-center">
                    <HelpCircle width="16" height="16" className="mr-2" stroke="black" />
                    FAQs
                  </span>
                  <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gray-800 mb-3">Questions? Answers!</h2>
                  <p className="text-gray-600 max-w-xl mb-12">Find quick answers to the most common questions about the services offered</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="md:col-span-1">
                      <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            <HelpCircle width="32" height="32" stroke="black" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Get In Touch Now!</h3>
                        <p className="text-gray-600 text-center mb-8">Still have questions? Feel free to get in touch with us today!</p>
                        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                          <ArrowRight width="18" height="18" stroke="white" />
                          <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer">
                            <span>Ask A Question</span>
                          </a>
                        </button>
                      </div>
                  </motion.div>
                  
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="md:col-span-2 space-y-4">
                      <FaqItem 
                        question="What web development services do you offer?" 
                        answer="I provide full-stack web development using modern frameworks like React, Next.js, and Node.js, with specialized expertise in AI integration, including custom ML models, natural language processing, computer vision, and intelligent data analysis solutions."
                      />
                      <FaqItem 
                        question="What AI technologies do you work with?" 
                        answer="I work with a wide range of AI technologies including TensorFlow, PyTorch, LangChain for LLM applications, computer vision libraries, recommendation systems, and natural language processing frameworks. I can integrate these into web applications or build standalone AI solutions."
                      />
                      <FaqItem 
                        question="How do we get started on a project?" 
                        answer="The process begins with a technical consultation where we discuss your requirements, business objectives, and technical constraints. Then I'll develop a detailed project proposal with architecture recommendations, timeline, and cost estimates. Once approved, we begin the development process with regular updates and feedback cycles."
                      />
                      <FaqItem 
                        question="What is your pricing structure?" 
                        answer="For web development projects, I charge $95-150/hour depending on complexity, or fixed project rates starting at $5,000 for smaller projects. AI integration work typically starts at $8,000 due to the specialized expertise required. Enterprise-level solutions with custom AI are priced based on specific requirements."
                      />
                      <FaqItem 
                        question="How long does a typical project take?" 
                        answer="Standard web applications typically take 6-12 weeks from concept to launch. Projects with AI integration usually require 8-16 weeks, including model training and testing. Large enterprise solutions may take 4-6 months. I provide detailed timelines during the proposal phase and maintain transparent communication throughout development."
                      />
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Final Call to Action Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8">
              <div className="flex flex-col items-center text-center">
                {/* Handshake Icon in Dark Circle */}
                <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full mb-8">
                  <Handshake width="24" height="24" className="text-white" />
                </div>
                
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold font-playfair-display mb-4 text-black">
                  Tell Me About Your <br/> Next Tech Challenge
                </h2>
                
                {/* Subheading */}
                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mb-10">
                  Let&apos;s create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms
                </p>
                
                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3.5 rounded-full button-gradient-dark text-white font-medium text-lg flex items-center justify-center gap-2">
                    <Send width="18" height="18" />
                    <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer">
                      <span>Contact Me</span>
                    </a>
                  </button>
                  <a href="/project" className="px-8 py-3.5 rounded-full button-gradient-light text-gray-800 font-medium text-lg flex items-center justify-center gap-2">
                    <span>See Projects</span>
                    <ArrowRight width="18" height="18" />
                  </a>
                </motion.div>
              </div>
            </motion.section>

            {/* Custom CSS */}
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
                    width: 100%;
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

export default App;