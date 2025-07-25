'use client';
import TrackableCircularGallery from "@/components/magicui/TrackableCircularGallery";

import React, { useState } from 'react';
import { useLenisSmoothScroll } from '@/lib/useLenisSmoothScroll';
import { ChevronDown, ArrowRight, Download, Target, Layers, Monitor, Paintbrush, Send, LayoutGrid, HelpCircle, Handshake } from 'lucide-react';
// Ikon Instagram, Linkedin, Github diambil dari lucide-react
import Heading from "@/components/template/Heading";
import Footer from "@/components/template/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import CardSwap, { Card } from '@/components/react-bits/CardSwap';
import Orb from '@/components/react-bits/Orb';
import Threads from '@/components/react-bits/Threads';
import Particles from '@/components/react-bits/Particles';
import InfiniteScroll from '@/components/react-bits/InfiniteScroll';
// --- START: Activities Infinite Scroll Section ---
const activitiesImages = [
  '/global/programmer1.jpg',
  '/global/programmer2.jpg',
  '/global/cloud_app.jpg',
  '/global/custom_ai_solution.jpg',
  '/global/fullstack_developer.jpg',
  '/global/rievan.jpg',
  '/global/moon.png',
  '/window.svg',
];

const activitiesItems = activitiesImages.map((img, idx) => ({
  content: (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={img}
        alt={`Activity ${idx + 1}`}
        className="rounded-xl object-cover w-full h-full shadow-lg border border-gray-700 bg-[#18181b]"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        draggable={false}
        width={400}
        height={300}
      />
    </div>
  ),
}));
// --- END: Activities Infinite Scroll Section ---

// FAQ Item Component
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-glass-card rounded-xl overflow-hidden shadow-lg border border-white/10 mb-2 transition-all duration-300 ${isOpen ? 'ring-2 ring-white/30' : ''}`}>
      <button
        className="w-full p-4 text-left flex justify-between items-center focus:outline-none bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-white">{question}</span>
        <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`} stroke="white" />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-200">
          {answer}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
    useLenisSmoothScroll();
    return (
        <div className="relative flex min-h-screen flex-col bg-[#18181b] font-inter overflow-x-hidden">
            {/* Hero Section */}
            <motion.section 
                id="hero"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="bg-[#18181b] min-h-screen w-full flex-1 flex flex-col relative"
            >
                {/* Orb background */}
                <div className="absolute inset-0 z-0">
                    <Orb hue={240} hoverIntensity={0.5} rotateOnHover={true} />
                </div>
                {/* Particles background */}
                <div className="absolute inset-0 z-[1]">
                    <Particles 
                        particleCount={800}
                        particleSpread={12}
                        speed={0.08}
                        particleColors={["#ffffff", "#e2e8f0", "#cbd5e1", "#f1f5f9"]}
                        moveParticlesOnHover={true}
                        particleHoverFactor={0.3}
                        alphaParticles={true}
                        particleBaseSize={40}
                        sizeRandomness={2.8}
                        cameraDistance={22}
                        disableRotation={false}
                    />
                </div>
                {/* Heading Section */}
                <Heading />
                {/* Main content di tengah */}
                <div className="flex flex-1 items-center justify-center relative z-10">
                    <section id="main" className="mb-12 w-full">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="mb-6 mt-16 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                        <div className="app-icon profile-image-container overflow-hidden">
                          <Image
                            src="/global/rievan.jpg"
                            alt="Rievan"
                            width={80}
                            height={80}
                            className="w-[80px] h-[80px] object-cover"
                          />
                        </div>
                        <h1 className="font-playfair-display text-5xl font-bold text-white md:text-6xl">
                          I&apos;m Rievan
                        </h1>
                      </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                            <h2 className="font-playfair-display text-5xl font-bold text-white md:text-6xl">
                                Averillio Fadhlan
                            </h2>
                            <div className="flex space-x-4">
                                <div className="app-icon cloud">
                                    <Image
                                        src="/global/programmer1.jpg"
                                        alt="programmer_app"
                                        width={80}
                                        height={80}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = 'https://placehold.co/80x80/222/fff?text=Cloud';
                                        }}
                                    />
                                </div>
                                <div className="app-icon programmer2">
                                    <Image
                                        src="/global/programmer2.jpg"
                                        alt="programmer_app"
                                        width={80}
                                        height={80}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = 'https://placehold.co/80x80/444/fff?text=Moon';
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
                            className="mx-auto mt-8 mb-8 max-w-2xl text-lg text-gray-300 md:mt-4 sm:mt-8">
                            I specialize in building powerful web applications and AI solutions, creating cutting-edge technologies for startups and enterprises
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 sm:flex-col sm:space-y-4 mb-20">
                            <a href="/dokumen/CV Rievan Averillio Fadhlan.pdf" download className="button-gradient-dark flex items-center space-x-2 rounded-xl px-6 py-3 text-white shadow-lg transition-all hover:scale-105">
                                <Download />
                                <span>Get Curriculum Vitae</span>
                            </a>
                            <a href="/project" className="button-gradient-light flex items-center space-x-2 rounded-xl px-6 py-3 text-gray-100 shadow-lg transition-all hover:scale-105">
                                <span>See Projects</span>
                                <ArrowRight />
                            </a>
                        </motion.div>
                    </section>
                </div>
            </motion.section>

            {/* Threads Animation Section */}
            <motion.section
                id="threads"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-[#18181b] py-24 relative overflow-hidden"
            >
                <div className="absolute inset-0">
                    <Threads 
                        color={[0.4, 0.6, 1]} 
                        amplitude={1.5} 
                        distance={0.3} 
                        enableMouseInteraction={true} 
                    />
                </div>
                {/* Particles background */}
                <div className="absolute inset-0 z-[1]">
                    <Particles 
                        particleCount={100}
                        particleSpread={12}
                        speed={0.03}
                        particleColors={["#60a5fa", "#3b82f6", "#1d4ed8"]}
                        moveParticlesOnHover={true}
                        particleHoverFactor={0.3}
                        alphaParticles={true}
                        particleBaseSize={30}
                        sizeRandomness={0.8}
                        cameraDistance={30}
                        disableRotation={false}
                    />
                </div>
                <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-playfair-display font-bold text-white mb-4">
                            Crafting Digital
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-playfair-display font-light text-gray-300">
                            Experiences
                        </h3>
                        <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
                            Where innovation meets artistry in web development
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* New Portfolio Section with CardSwap */}
            <motion.section
                id="portfolio"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full py-16 px-12 flex justify-center relative"
                style={{ background: 'transparent' }}
            >
                {/* Particles background */}
                <div className="absolute inset-0 z-0 bg-[#18181b]">
                    <Particles 
                        particleCount={700}
                        particleSpread={18}
                        speed={0.035}
                        particleColors={["#ffffff", "#e2e8f0", "#cbd5e1", "#94a3b8", "#f8fafc"]}
                        moveParticlesOnHover={true}
                        particleHoverFactor={0.25}
                        alphaParticles={true}
                        particleBaseSize={45}
                        sizeRandomness={2.6}
                        cameraDistance={30}
                        disableRotation={true}
                    />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <span className="px-5 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm font-medium shadow-sm border border-gray-700 mb-4 flex items-center w-fit">
                                Featured Projects
                            </span>
                            <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-white leading-tight">
                                Innovative Projects
                                <br />
                                <span className="text-gray-400">That Matter</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                Explore my latest work featuring cutting-edge technologies, AI integrations, and modern web applications that deliver exceptional user experiences.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full-Stack Web Applications</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">AI-Powered Solutions</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Modern UI/UX Design</span>
                                </div>
                            </div>
                            <div className="pt-4">
                                <a href="/project" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                    <span>View All Projects</span>
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Right Content - CardSwap */}
                        <div className="relative h-[500px] lg:h-[600px]">
                            <CardSwap
                                width={420}
                                height={420}
                                cardDistance={35}
                                verticalDistance={45}
                                delay={4000}
                                pauseOnHover={true}
                                skewAmount={3}
                                easing="elastic"
                                // Perbaikan: pastikan klik pada kartu langsung trigger animasi ke kartu tersebut
                                onCardClick={(idx) => {
                                  if (typeof window !== 'undefined') {
                                    // Trigger custom event agar CardSwap langsung swap card ke belakang
                                    const event = new CustomEvent('cardSwapToBack', { detail: { idx } });
                                    window.dispatchEvent(event);
                                  }
                                }}
                            >
                                <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                                    <div className="w-full h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/global/cloud_app.jpg"
                                                alt="LanderOS Project"
                                                width={420}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                                    <Monitor size={20} className="text-blue-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-white text-xl font-bold mb-2">LanderOS</h3>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    Modern operating system interface built with React and TypeScript
                                                </p>
                                            </div>
                                            <div className="flex gap-2 flex-wrap mt-4">
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React</span>
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">TypeScript</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                                    <div className="w-full h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/global/custom_ai_solution.jpg"
                                                alt="AI Analytics Project"
                                                width={420}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                                    <Target size={20} className="text-green-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-white text-xl font-bold mb-2">AI Analytics</h3>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    Machine learning platform for business intelligence and data analysis
                                                </p>
                                            </div>
                                            <div className="flex gap-2 flex-wrap mt-4">
                                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">Python</span>
                                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">TensorFlow</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                                    <div className="w-full h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/global/fullstack_developer.jpg"
                                                alt="CloudSync Project"
                                                width={420}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                                    <Layers size={20} className="text-purple-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-white text-xl font-bold mb-2">CloudSync</h3>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    Real-time collaboration platform with file synchronization features
                                                </p>
                                            </div>
                                            <div className="flex gap-2 flex-wrap mt-4">
                                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">Node.js</span>
                                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">Socket.io</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                                    <div className="w-full h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/global/programmer1.jpg"
                                                alt="DesignStudio Project"
                                                width={420}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                                    <Paintbrush size={20} className="text-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-white text-xl font-bold mb-2">DesignStudio</h3>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    Creative design tool with AI-powered suggestions and collaboration
                                                </p>
                                            </div>
                                            <div className="flex gap-2 flex-wrap mt-4">
                                                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Vue.js</span>
                                                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Canvas API</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                <style>{`
                  .project-card {
                    cursor: pointer;
                    will-change: transform, box-shadow;
                  }
                  .project-card:hover {
                    transform: translateY(-10px) scale(1.035) rotate(-1deg);
                    box-shadow: 0 12px 40px 0 rgba(80,120,255,0.18), 0 2px 8px 0 rgba(30,41,59,0.10);
                    border-color: #60a5fa;
                  }
                `}</style>
                                    <div className="w-full h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/global/programmer2.jpg"
                                                alt="DataFlow Project"
                                                width={420}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                                    <LayoutGrid size={20} className="text-indigo-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-white text-xl font-bold mb-2">DataFlow</h3>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    Enterprise data pipeline with real-time processing and analytics
                                                </p>
                                            </div>
                                            <div className="flex gap-2 flex-wrap mt-4">
                                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">Next.js</span>
                                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">GraphQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </motion.section>


            {/* Activities Infinite Scroll Section */}
            <motion.section
                id="activities"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full py-16 flex flex-col items-center justify-center px-2 md:px-8 relative"
                style={{ background: 'transparent' }}
            >
                {/* Particles background */}
                <div className="absolute inset-0 z-0 bg-[#18181b]">
                    <Particles 
                        particleCount={900}
                        particleSpread={15}
                        speed={0.06}
                        particleColors={["#ffffff", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#f8fafc"]}
                        moveParticlesOnHover={false}
                        particleHoverFactor={0}
                        alphaParticles={true}
                        particleBaseSize={38}
                        sizeRandomness={3.0}
                        cameraDistance={20}
                        disableRotation={false}
                    />
                </div>
                <span className="px-5 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm font-medium shadow-sm border border-gray-700 mb-4 flex items-center relative z-10">
                    Activities
                </span>
                <h2 className="text-3xl md:text-4xl font-playfair-display font-bold text-white mb-2 relative z-10">Recent Activities</h2>
                <p className="text-gray-400 text-base md:text-lg mb-8 relative z-10 max-w-2xl text-center">Berikut adalah beberapa aktivitas, karya, dan dokumentasi terbaru selama perjalanan saya di dunia teknologi dan pengembangan web.</p>
                <div className="relative z-10 flex justify-center w-full" style={{ minHeight: 400, paddingLeft: 0, paddingRight: 0 }}>
                    <div
                        className="overflow-hidden rounded-xl w-full relative"
                        style={{ maxWidth: '100%', width: '100%', background: 'transparent', border: 'none', paddingLeft: '120px' }}
                    >
                        {/* Text content kanan atas */}
                        <div style={{ position: 'absolute', top: 18, right: 32, zIndex: 2, textAlign: 'right', maxWidth: 340 }}>
                            <div className="font-playfair-display text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                            Aktivitas Selama Menjadi Mahasiswa
                            </div>
                            <div className="text-lg md:text-2xl text-gray-300 mb-3">
                            Kontribusi Nyata di Dunia Teknologi & Kreativitas
                            </div>
                            {/* <div className="text-base md:text-lg text-gray-400 mb-3">
                            Dokumentasi perjalanan saya selama kuliah: mulai dari pengembangan web, eksplorasi kecerdasan buatan, hingga proyek-proyek kreatif yang menjadi bagian dari proses belajar dan kontribusi nyata saya di dunia teknologi.
                            </div> */}

                        </div>
                        <InfiniteScroll
                            width="90%"
                            maxHeight="300px"
                            negativeMargin="-6.5em"
                            items={activitiesItems}
                            itemMinHeight={280}
                            isTilted={true}
                            tiltDirection="left"
                            autoplay={true}
                            autoplaySpeed={1.0}
                            autoplayDirection="down"
                            pauseOnHover={false}
                        />
                    </div>
                </div>
            </motion.section>
            {/* Activity Section (lama) */}
            {/* <ActivitySection /> */}

            {/* Profile Section */}
            <motion.section
                id="profile"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full py-16 px-12 flex justify-center relative"
                style={{ background: 'transparent' }}
            >
              {/* Particles background */}
              <div className="absolute inset-0 z-0 bg-[#18181b]">
                  <Particles 
                      particleCount={750}
                      particleSpread={17}
                      speed={0.045}
                      particleColors={["#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1"]}
                      moveParticlesOnHover={true}
                      particleHoverFactor={0.15}
                      alphaParticles={true}
                      particleBaseSize={50}
                      sizeRandomness={2.5}
                      cameraDistance={24}
                      disableRotation={false}
                  />
              </div>
              <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 w-full px-0 md:px-0 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-[#232323] p-2 rounded-lg shadow max-w-xs mx-auto lg:mx-0 text-xs">
                  <div className="flex justify-center mb-6">
                    <div className="w-68 h-68 rounded2xl overflow-hidden shadow-lg">
                      <Image 
                        src="/global/rievan.jpg" 
                        alt="PIC_PROFILE" 
                        width={272}
                        height={272}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex p-2 items-center justify-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse-dot"></div>
                      <span className="text-gray-200 text-sm">available for work</span>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2 font-playfair-display">Rievan Averillio</h2>
                    <p className="text-gray-300 leading-relaxed">Full-Stack & AI Developer Based in Berlin.</p>
                  </div>
                  <div className="flex justify-center gap-4 mb-8">
                    <a href="https://linkedin.com/in/rievan-averillio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#18181b] rounded-xl flex items-center justify-center hover:bg-gray-800 transition cursor-pointer text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://instagram.com/rievan.averillio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#18181b] rounded-xl flex items-center justify-center hover:bg-gray-800 transition cursor-pointer text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://github.com/rievanaverilllio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#18181b] rounded-xl flex items-center justify-center hover:bg-gray-800 transition cursor-pointer text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                    </a>
                  </div>
                  <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer" className="w-40 bg-white text-black py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition mb-4 mx-auto">
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
                    <p className="text-gray-300 text-XL leading-relaxed mb-6 mt-5">
                      I&apos;m Rievan Averillio, a passionate Web &amp; AI Developer based in the dynamic city of Berlin, Germany. I combine advanced programming expertise with AI knowledge to build powerful digital solutions that solve real-world problems.
                    </p>
                    <hr className="border-1 border-dashed border-gray-700 mb-3" />
                    <div className="flex flex-wrap gap-3 mb-6">
                      {/* JAVASCRIPT */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#222">JS</text></svg>
                        Javascript
                      </span>
                      {/* PHP */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#8993be"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#fff">PHP</text></svg>
                        PHP
                      </span>
                      {/* PYTHON */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#3776AB"/><text x="3" y="22" fontSize="16" fontWeight="bold" fill="#FFD43B">Py</text></svg>
                        Python
                      </span>
                      {/* TYPESCRIPT */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#3178c6"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">TS</text></svg>
                        Typescript
                      </span>
                      {/* LARAVEL */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect x="4" y="20" width="8" height="8" fill="#fff"/><rect x="20" y="4" width="8" height="8" fill="#fff"/><rect x="12" y="12" width="8" height="8" fill="#fff"/></svg>
                        Laravel
                      </span>
                      {/* NODEJS */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#68A063"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">Node</text></svg>
                        Node.js
                      </span>
                      {/* NEXTJS */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><circle cx="16" cy="16" r="16" fill="#111"/><path d="M8 8l16 16" stroke="#fff" strokeWidth="2"/></svg>
                        Next
                      </span>
                      {/* REACT */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse rx="10" ry="4.5" transform="matrix(.866 .5 -.866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="10" ry="4.5" transform="matrix(.866 -.5 .866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="10" ry="4.5" transform="matrix(0 1 -1 0 16 16)" stroke="#61DAFB" strokeWidth="2"/></svg>
                        React
                      </span>
                      {/* TAILWINDCSS */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 12c2-4 8-4 10 0s-2 8-6 8-6-4-4-8z" fill="#fff"/></svg>
                        TailwindCSS
                      </span>
                      {/* BOOTSTRAP */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#7952B3"/><text x="5" y="22" fontSize="16" fontWeight="bold" fill="#fff">B</text></svg>
                        Bootstrap
                      </span>
                      {/* VITE */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 4l10 18H6L16 4z" fill="#fff"/><path d="M16 28a4 4 0 100-8 4 4 0 000 8z" fill="#FFD62E"/></svg>
                        Vite
                      </span>
                      {/* POSTGRES */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#336791"/><path d="M23.5 19.5c-1.5 2-4.5 2.5-7.5 2.5s-6-0.5-7.5-2.5c-1.5-2 0-5 3-6.5 1.5-0.5 3.5-0.5 4.5-0.5s3 0 4.5 0.5c3 1.5 4.5 4.5 3 6.5z" fill="#fff"/></svg>
                        Postgres
                      </span>
                      {/* MYSQL */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#00758F"/><path d="M10 22c2-6 10-6 12 0" stroke="#fff" strokeWidth="2"/><circle cx="22" cy="12" r="2" fill="#fff"/></svg>
                        MySQL
                      </span>
                      {/* TENSORFLOW */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 4v24M16 16l8 4v8l-8-4-8 4v-8l8-4z" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                        TensorFlow
                      </span>
                      {/* DOCKER */}
                      <span className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{minWidth:'120px'}}>
                        <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#2496ED"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">🐳</text></svg>
                        Docker
                      </span>
                    </div>
                    <hr className="border-1 border-dashed border-gray-700" />
                  </div>
                    <div className="space-y-6">
                    <div className="bg-[#232323] rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-white">Lead Developer</div>
                        <div className="flex-1 text-gray-300 text-center">TechNova AI</div>
                        <div className="w-20 text-right text-gray-500">2023</div>
                    </div>
                    <div className="bg-[#232323] rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-white">AI Engineer</div>
                        <div className="flex-1 text-gray-300 text-center">DataMind Labs</div>
                        <div className="w-20 text-right text-gray-500">2021</div>
                    </div>
                    <div className="bg-[#232323] rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-white">Full-Stack Developer</div>
                        <div className="flex-1 text-gray-300 text-center">CloudSphere</div>
                        <div className="w-20 text-right text-gray-500">2024</div>
                    </div>
                    </div>

                </motion.div>
              </div>
            </motion.section>




            {/* Achievements Section - Circular Gallery */}
            <motion.section
                id="achievements"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full py-16 flex justify-center px-3 relative min-h-[480px] md:min-h-[540px]"
                style={{ background: 'transparent' }}
            >
              {/* Particles background */}
              <div className="absolute inset-0 z-0 bg-[#18181b]">
                  <Particles 
                      particleCount={600}
                      particleSpread={18}
                      speed={0.04}
                      particleColors={["#f8fafc", "#e2e8f0", "#cbd5e1", "#60a5fa"]}
                      moveParticlesOnHover={false}
                      particleHoverFactor={0}
                      alphaParticles={true}
                      particleBaseSize={38}
                      sizeRandomness={2.2}
                      cameraDistance={24}
                      disableRotation={true}
                  />
              </div>
              <div className="w-full max-w-6xl px-4 relative z-10 flex flex-col items-center">
                <span className="px-5 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm font-medium shadow-sm border border-gray-700 mb-4 flex items-center">
                  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="mr-2"><path d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.44 4.73L5.8 21z"/></svg>
                  Achievements
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-white mb-3">Milestones & Recognition</h2>
                <p className="text-gray-400 max-w-xl mb-8 text-center">Beberapa pencapaian utama dan penghargaan yang telah diraih selama perjalanan profesional saya di dunia teknologi.</p>
                <div className="w-full h-[500px] md:h-[300px] relative">
                  {/* Track Card Bubble Feature */}
                  <TrackableCircularGallery
                    items={[
                      { image: "/achievements/hkicheator.jpg", text: "Hak Kekayaan Intelektual, Itenas 2024" },
                      { image: "/achievements/aslab_pemdas.jpg", text: "Asisten Laboratorium Pemograman Dasar, Itenas 2024" },
                      { image: "/achievements/Magang_Omikron.png", text: "Intern PT Omikron Solusi Kreatif 2025" },
                      { image: "/achievements/findit.jpg", text: "Peserta Data Analyst FindIT, UGM 2024" },
                      { image: "/achievements/fortex.png", text: "Peserta Data Analyst Fortex, UAI 2024" },
                      { image: "/achievements/Huawei Juara 2.jpg", text: "Juara 2 Cloud Computing Track, Huawei 2024" },
                      { image: "/achievements/Sertif_Best_Presntasi.jpg", text: "Sertifikat Best Presentation, UNJ 2024" },
                    ]}
                    renderImage={(src, alt) => (
                      <Image
                        src={src}
                        alt={alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        draggable={false}
                        width={300}
                        height={300}
                      />
                    )}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.07}
                    font="bold 28px Figtree"
                    scrollSpeed={0.5}
                    scrollEase={0.07}
                  />
                </div>
              </div>
            </motion.section>

            {/* FAQs Section */}
            <motion.section
                id="faqs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full py-16 flex justify-center mx-3 relative"
                style={{ background: 'transparent' }}
            >
              {/* Particles background */}
              <div className="absolute inset-0 z-0 bg-[#18181b]">
                  <Particles 
                      particleCount={800}
                      particleSpread={20}
                      speed={0.05}
                      particleColors={["#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1"]}
                      moveParticlesOnHover={false}
                      particleHoverFactor={0}
                      alphaParticles={true}
                      particleBaseSize={45}
                      sizeRandomness={2.7}
                      cameraDistance={28}
                      disableRotation={true}
                  />
              </div>
              <div className="w-full max-w-5xl px-4 relative z-10">
                <div className="flex flex-col items-center mb-10 text-center">
                  <span className="px-5 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm font-medium shadow-sm border border-gray-700 mb-4 flex items-center">
                    <HelpCircle width="16" height="16" className="mr-2" stroke="white" />
                    FAQs
                  </span>
                  <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-white mb-3">Questions? Answers!</h2>
                  <p className="text-gray-400 max-w-xl mb-12">Find quick answers to the most common questions about the services offered</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="faq-glass-card p-8 rounded-xl shadow-lg border border-white/10 flex flex-col items-center justify-center">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                          <HelpCircle width="32" height="32" stroke="white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-4 text-white">Get In Touch Now!</h3>
                      <p className="text-gray-200 text-center mb-8">Still have questions? Feel free to get in touch with us today!</p>
                      <a href="https://api.whatsapp.com/send?phone=6281221678094" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition">
                        <ArrowRight width="18" height="18" stroke="black" />
                        <span>Ask A Question</span>
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <FaqItem 
                      question="Apa layanan utama yang ditawarkan?" 
                      answer="Saya menawarkan pengembangan aplikasi web full-stack, solusi AI, dan integrasi cloud untuk startup maupun enterprise." 
                    />
                    <FaqItem 
                      question="Apakah bisa custom project sesuai kebutuhan?" 
                      answer="Tentu! Semua proyek dapat disesuaikan dengan kebutuhan bisnis dan teknologi Anda." 
                    />
                    <FaqItem 
                      question="Bagaimana proses kerja sama dimulai?" 
                      answer="Cukup hubungi saya melalui kontak yang tersedia, lalu kita diskusikan kebutuhan dan solusi terbaik." 
                    />
                    <FaqItem 
                      question="Berapa lama waktu pengerjaan rata-rata?" 
                      answer="Aplikasi web standar biasanya 6-12 minggu, dengan AI 8-16 minggu, dan enterprise solution 4-6 bulan. Timeline detail diberikan di awal proyek." 
                    />
                  </div>
                <style>{`
                  .faq-glass-card {
                    background: rgba(30,30,30,0.18);
                    backdrop-filter: blur(18px) saturate(180%);
                    -webkit-backdrop-filter: blur(18px) saturate(180%);
                    border: 1.5px solid rgba(255,255,255,0.13);
                    box-shadow: 0 6px 32px 0 rgba(30,41,59,0.10), 0 1.5px 6px 0 rgba(30,41,59,0.08);
                  }
                `}</style>
                </div>
              </div>
            </motion.section>

            {/* Final Call to Action Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8 relative"
                style={{ background: 'transparent' }}
            >
              {/* Particles background */}
              <div className="absolute inset-0 z-0 bg-[#18181b]">
                  <Particles 
                      particleCount={1000}
                      particleSpread={22}
                      speed={0.055}
                      particleColors={["#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8"]}
                      moveParticlesOnHover={true}
                      particleHoverFactor={0.1}
                      alphaParticles={true}
                      particleBaseSize={35}
                      sizeRandomness={3.2}
                      cameraDistance={18}
                      disableRotation={true}
                  />
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Handshake Icon in Dark Circle */}
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-8">
                  <Handshake width="24" height="24" className="text-black" />
                </div>
                
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold font-playfair-display mb-4 text-white">
                  Tell Me About Your <br/> Next Tech Challenge
                </h2>
                
                {/* Subheading */}
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
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
                  <a href="/project" className="px-8 py-3.5 rounded-full button-gradient-light text-white font-medium text-lg flex items-center justify-center gap-2">
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
                    background: linear-gradient(145deg, #232323, #18181b);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                .button-gradient-dark:hover {
                    background: linear-gradient(145deg, #2a2a2a, #232323);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                }

                .button-gradient-light {
                    background: linear-gradient(145deg, #232323, #444);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                .button-gradient-light:hover {
                    background: linear-gradient(145deg, #444, #232323);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                .icon-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(30, 30, 30, 0.7);
                    backdrop-filter: blur(5px);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    transition: all 0.2s ease;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .icon-button:hover {
                    background-color: rgba(30, 30, 30, 0.9);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transform: translateY(-1px);
                }

                .profile-image-container {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
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
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #232323;
                }
                .app-icon img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .app-icon.cloud { background: linear-gradient(135deg, #232323, #444); }
                .app-icon.moon { background: linear-gradient(135deg, #444, #232323); }

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
                    0% { box-shadow: 0 0 0 0 rgba(255,255,255, 0.7); }
                    70% { box-shadow: 0 0 0 8px rgba(255,255,255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255,255,255, 0); }
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
                .portfolio-fade-left { left: 0; background: linear-gradient(90deg, #18181b 80%, transparent); }
                .portfolio-fade-right { right: 0; background: linear-gradient(-90deg, #18181b 80%, transparent); }
                
                .glass-card {
                    background: rgba(30,30,30,0.15);
                    backdrop-filter: blur(18px) saturate(180%);
                    -webkit-backdrop-filter: blur(18px) saturate(180%);
                    border: 1.5px solid rgba(30,30,30,0.18);
                }
            `}</style>
        {/* Bottom Navbar Section */}
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center">
          <div
            className="border border-gray-700 rounded-full shadow-lg px-4 py-1 flex items-center"
            style={{
              minHeight: '44px',
              minWidth: 'fit-content',
              background: 'linear-gradient(90deg, rgba(30,30,30,0.85) 60%, rgba(60,60,80,0.65) 100%)',
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              boxShadow: '0 4px 24px 0 rgba(80,120,255,0.12), 0 1.5px 6px 0 rgba(30,41,59,0.10)'
            }}
          >
            <ul className="flex space-x-2">
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </button>
              </li>
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('threads')?.scrollIntoView({ behavior: 'smooth' })}>
                  Threads
                </button>
              </li>
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  Portfolio
                </button>
              </li>
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}>
                  Activities
                </button>
              </li>
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}>
                  Profile
                </button>
              </li>
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}>
                  Achievements
                </button>
              </li>
              <li>
                <button className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition" style={{minWidth:'60px'}} onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}>
                  FAQs
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* Footer Section */}
        <Footer />
      </div>
    );
};

export default App;