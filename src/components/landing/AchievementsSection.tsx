"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "@/components/react-bits/Particles";
import TrackableCircularGallery from "@/components/magicui/TrackableCircularGallery";
import Image from "next/image";

const achievementItems = [
  { image: "/achievements/hkicheator.jpg", text: "Hak Kekayaan Intelektual, Itenas 2024" },
  { image: "/achievements/aslab_pemdas.jpg", text: "Asisten Laboratorium Pemograman Dasar, Itenas 2024" },
  { image: "/achievements/Magang_Omikron.png", text: "Intern PT Omikron Solusi Kreatif 2025" },
  { image: "/achievements/findit.jpg", text: "Peserta Data Analyst FindIT, UGM 2024" },
  { image: "/achievements/fortex.png", text: "Peserta Data Analyst Fortex, UAI 2024" },
  { image: "/achievements/Huawei Juara 2.jpg", text: "Juara 2 Cloud Computing Track, Huawei 2024" },
  { image: "/achievements/Sertif_Best_Presntasi.jpg", text: "Sertifikat Best Presentation, UNJ 2024" },
];

const AchievementsSection: React.FC = () => {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full py-16 flex justify-center px-3 relative min-h-[480px] md:min-h-[540px]"
      style={{ background: 'transparent' }}
    >
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
          <TrackableCircularGallery
            items={achievementItems}
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
  );
};

export default AchievementsSection;
