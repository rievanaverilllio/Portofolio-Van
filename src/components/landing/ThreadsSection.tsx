"use client";
import React from "react";
import { motion } from "framer-motion";
import Threads from "@/components/react-bits/Threads";
import Particles from "@/components/react-bits/Particles";

const ThreadsSection: React.FC = () => {
  return (
    <motion.section
      id="threads"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-[#18181b] py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Threads color={[0.4, 0.6, 1]} amplitude={1.5} distance={0.3} enableMouseInteraction={true} />
      </div>
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
  );
};

export default ThreadsSection;
