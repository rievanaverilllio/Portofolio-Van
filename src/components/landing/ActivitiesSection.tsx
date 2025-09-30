"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "@/components/react-bits/Particles";
import InfiniteScroll from "@/components/react-bits/InfiniteScroll";
import Image from "next/image";

const activitiesImages = [
  '/activities/huawei-kunjungan.png',
  '/activities/anggota lomba huawei.jpg',
  '/activities/aslab-pemdas.png',
  '/activities/ict1.png',
  '/activities/ict2.png',
  '/activities/ict3.png',
  '/activities/ifrit.png',
  '/activities/juara-huawei.jpg',
  '/activities/kunjungan-ipwija-univ.png',
  '/activities/lkti-chef.png',
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

const ActivitiesSection: React.FC = () => {
  return (
    <motion.section
      id="activities"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full py-16 flex flex-col items-center justify-center px-2 md:px-8 relative"
      style={{ background: 'transparent' }}
    >
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
          <div style={{ position: 'absolute', top: 18, right: 32, zIndex: 2, textAlign: 'right', maxWidth: 340 }}>
            <div className="font-playfair-display text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Aktivitas Selama Menjadi Mahasiswa
            </div>
            <div className="text-lg md:text-2xl text-gray-300 mb-3">
              Kontribusi Nyata di Dunia Teknologi & Kreativitas
            </div>
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
  );
};

export default ActivitiesSection;
