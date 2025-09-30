"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "@/components/react-bits/Particles";
import { Handshake, Send, ArrowRight } from "lucide-react";

const FinalCtaSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8 relative"
      style={{ background: 'transparent' }}
    >
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
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-8">
          <Handshake width="24" height="24" className="text-black" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-playfair-display mb-4 text-white">
          Tell Me About Your <br /> Next Tech Challenge
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
          Let&apos;s create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
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
  );
};

export default FinalCtaSection;
