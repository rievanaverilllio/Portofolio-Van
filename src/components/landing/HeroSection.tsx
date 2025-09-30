"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/template/Heading";
import Orb from "@/components/react-bits/Orb";
import Particles from "@/components/react-bits/Particles";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-[#18181b] min-h-screen w-full flex-1 flex flex-col relative"
    >
      <div className="absolute inset-0 z-0">
        <Orb hue={240} hoverIntensity={0.5} rotateOnHover={true} />
      </div>
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
      <Heading />
      <div className="flex flex-1 items-center justify-center relative z-10">
        <section id="main" className="mb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-6 mt-16 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0"
          >
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
            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0"
          >
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
                    e.currentTarget.src =
                      "https://placehold.co/80x80/222/fff?text=Cloud";
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
                    e.currentTarget.src =
                      "https://placehold.co/80x80/444/fff?text=Moon";
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
            className="mx-auto mt-8 mb-8 max-w-2xl text-lg text-gray-300 md:mt-4 sm:mt-8"
          >
            I specialize in building powerful web applications and AI solutions, creating cutting-edge technologies for startups and enterprises
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 sm:flex-col sm:space-y-4 mb-20"
          >
            <a
              href="/dokumen/CV Rievan Averillio Fadhlan.pdf"
              download
              className="button-gradient-dark flex items-center space-x-2 rounded-xl px-6 py-3 text-white shadow-lg transition-all hover:scale-105"
            >
              <Download />
              <span>Get Curriculum Vitae</span>
            </a>
            <a
              href="/project"
              className="button-gradient-light flex items-center space-x-2 rounded-xl px-6 py-3 text-gray-100 shadow-lg transition-all hover:scale-105"
            >
              <span>See Projects</span>
              <ArrowRight />
            </a>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
};

export default HeroSection;
