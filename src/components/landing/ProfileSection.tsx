"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "@/components/react-bits/Particles";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const skills = [
  { label: 'Javascript', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#222">JS</text></svg> },
  { label: 'PHP', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#8993be"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#fff">PHP</text></svg> },
  { label: 'Python', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#3776AB"/><text x="3" y="22" fontSize="16" fontWeight="bold" fill="#FFD43B">Py</text></svg> },
  { label: 'Typescript', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#3178c6"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">TS</text></svg> },
  { label: 'Laravel', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect x="4" y="20" width="8" height="8" fill="#fff"/><rect x="20" y="4" width="8" height="8" fill="#fff"/><rect x="12" y="12" width="8" height="8" fill="#fff"/></svg> },
  { label: 'Node.js', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#68A063"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">Node</text></svg> },
  { label: 'Next', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><circle cx="16" cy="16" r="16" fill="#111"/><path d="M8 8l16 16" stroke="#fff" strokeWidth="2"/></svg> },
  { label: 'React', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse rx="10" ry="4.5" transform="matrix(.866 .5 -.866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="10" ry="4.5" transform="matrix(.866 -.5 .866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="10" ry="4.5" transform="matrix(0 1 -1 0 16 16)" stroke="#61DAFB" strokeWidth="2"/></svg> },
  { label: 'TailwindCSS', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 12c2-4 8-4 10 0s-2 8-6 8-6-4-4-8z" fill="#fff"/></svg> },
  { label: 'Bootstrap', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#7952B3"/><text x="5" y="22" fontSize="16" fontWeight="bold" fill="#fff">B</text></svg> },
  { label: 'Vite', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 4l10 18H6L16 4z" fill="#fff"/><path d="M16 28a4 4 0 100-8 4 4 0 000 8z" fill="#FFD62E"/></svg> },
  { label: 'Postgres', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#336791"/><path d="M23.5 19.5c-1.5 2-4.5 2.5-7.5 2.5s-6-0.5-7.5-2.5c-1.5-2 0-5 3-6.5 1.5-0.5 3.5-0.5 4.5-0.5s3 0 4.5 0.5c3 1.5 4.5 4.5 3 6.5z" fill="#fff"/></svg> },
  { label: 'MySQL', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#00758F"/><path d="M10 22c2-6 10-6 12 0" stroke="#fff" strokeWidth="2"/><circle cx="22" cy="12" r="2" fill="#fff"/></svg> },
  { label: 'TensorFlow', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><path d="M16 4v24M16 16l8 4v8l-8-4-8 4v-8l8-4z" stroke="#fff" strokeWidth="2" fill="none"/></svg> },
  { label: 'Docker', svg: <svg width="22" height="22" viewBox="0 0 32 32" className="mr-2"><rect width="32" height="32" rx="6" fill="#2496ED"/><text x="2" y="22" fontSize="16" fontWeight="bold" fill="#fff">🐳</text></svg> },
];

const experiences = [
  { role: 'Front End Programming', place: 'PT Omikron Solusi Kreatif', time: 'Mar - Jun 2025' },
  { role: 'Assisten Laboratorium', place: 'Lab Pengolahan Citra Digital', time: 'Mar - Jun 2025' },
  { role: 'Assisten Laboratorium', place: 'Lab Pemograman Dasar', time: 'Sep - Des 2024' },
];

const ProfileSection: React.FC = () => {
  return (
    <motion.section
      id="profile"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full py-16 px-12 flex justify-center relative"
      style={{ background: 'transparent' }}
    >
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
          className="bg-[#232323] p-2 rounded-lg shadow max-w-xs mx-auto lg:mx-0 text-xs"
        >
          <div className="flex justify-center mb-6">
            <div className="w-68 h-68 rounded2xl overflow-hidden shadow-lg">
              <Image src="/global/rievan.jpg" alt="PIC_PROFILE" width={272} height={272} className="w-full h-full object-cover rounded-md" />
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
          className="space-y-8"
        >
          <div>
            <p className="text-gray-300 text-XL leading-relaxed mb-6 mt-5">
              I&apos;m Rievan Averillio, a passionate Web &amp; AI Developer based in the dynamic city of Berlin, Germany. I combine advanced programming expertise with AI knowledge to build powerful digital solutions that solve real-world problems.
            </p>
            <hr className="border-1 border-dashed border-gray-700 mb-3" />
            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map(s => (
                <span key={s.label} className="flex items-center px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm bg-[#232323] text-white" style={{ minWidth: '120px' }}>
                  {s.svg}
                  {s.label}
                </span>
              ))}
            </div>
            <hr className="border-1 border-dashed border-gray-700" />
          </div>
          <div className="space-y-6">
            {experiences.map(exp => (
              <div key={exp.role + exp.time} className="bg-[#232323] rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                <div className="flex-1 font-medium text-white">{exp.role}</div>
                <div className="flex-1 text-gray-300 text-center">{exp.place}</div>
                <div className="w-20 text-right text-gray-500">{exp.time}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProfileSection;
