"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/template/Heading";
import Footer from "@/components/template/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Particles from "@/components/react-bits/Particles";

// Featured Projects content (replicated from landing page Featured section)
const projects = [
  {
    title: "Cheator",
    description: "Cheating Detector Web App with Real-time Analysis and Reporting",
    image: "/project/cheator.png",
    tags: ["Vanila", "HTML"],
    link: "https://github.com/rievanaverilllio/Cheator"
  },
  {
    title: "Banjay",
    description: "Website for flood monitoring based on AI and satellite data",
    image: "/project/banjay.png",
    tags: ["React", "Typescript"],
    link: "https://github.com/rievanaverilllio/Front-Banjay"
  },
  {
    title: "MiniGold",
    description: "Online gold sales website",
    image: "/project/minigold.png",
    tags: ["React", "Typescript"],
    link: "https://github.com/rievanaverilllio/MiniGold-app"
  },
  {
    title: "Osila",
    description: "Online villa and accommodation booking platform",
    image: "/project/Osila.png", // fixed path case (was /Project/Osila.png in landing page)
    tags: ["React", "Typescript"],
    link: "https://github.com/rievanaverilllio/Osila-Hotel-app"
  },
  {
    title: "BakaShop",
    description: "Platform e-commerce untuk pembelian berbagai jaket vintage",
    image: "/project/bakashop.png",
    tags: ["Laravel", "PHP"],
    link: "https://github.com/rievanaverilllio/Website-ecommerce"
  },
  {
    title: "Medlitik",
    description: "Platform consultasi kesehatan seperti halodoc berbasis AI",
    image: "/project/Medlitik.png",
    tags: ["React", "Javascript"],
    link: "https://github.com/rievanaverilllio/Front-Medlitik"
  }
];

const ProjectPage: React.FC = () => {
  const [showParticles, setShowParticles] = useState(false);
  useEffect(() => {
    setShowParticles(true);
  }, []);
  return (
    <div className="relative min-h-screen flex flex-col bg-[#18181b] font-inter overflow-x-hidden">
      {/* Particles background */}
      <div className={`absolute inset-0 z-0 bg-[#18181b] transition-opacity duration-1000 ${showParticles ? 'opacity-100' : 'opacity-0'}`}>
        <Particles 
          particleCount={1200}
          particleSpread={22}
          speed={0.045}
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
      <Heading />
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex-1 w-full max-w-6xl mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-playfair-display font-bold text-white mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card bg-[#232323] border border-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover w-full h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex gap-2 flex-wrap mt-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mt-auto">
                  <span>See Details</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.main>
      <div className="w-full flex justify-center py-8 mb-8 relative z-20">
        <Link href="/" className="button-gradient-dark flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium text-lg shadow-lg hover:scale-105 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          <span>Back to Home</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
