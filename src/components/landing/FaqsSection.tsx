"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "@/components/react-bits/Particles";
import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react";

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
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-gray-200">{answer}</div>
      </div>
    </div>
  );
};

const FaqsSection: React.FC = () => {
  return (
    <motion.section
      id="faqs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full py-16 flex justify-center mx-3 relative"
      style={{ background: 'transparent' }}
    >
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
            <FaqItem question="Apa layanan utama yang ditawarkan?" answer="Saya menawarkan pengembangan aplikasi web full-stack, solusi AI, dan integrasi cloud untuk startup maupun enterprise." />
            <FaqItem question="Apakah bisa custom project sesuai kebutuhan?" answer="Tentu! Semua proyek dapat disesuaikan dengan kebutuhan bisnis dan teknologi Anda." />
            <FaqItem question="Bagaimana proses kerja sama dimulai?" answer="Cukup hubungi saya melalui kontak yang tersedia, lalu kita diskusikan kebutuhan dan solusi terbaik." />
            <FaqItem question="Berapa lama waktu pengerjaan rata-rata?" answer="Aplikasi web standar biasanya 6-12 minggu, dengan AI 8-16 minggu, dan enterprise solution 4-6 bulan. Timeline detail diberikan di awal proyek." />
          </div>
          <style>{`
            .faq-glass-card { background: rgba(30,30,30,0.18); backdrop-filter: blur(18px) saturate(180%); -webkit-backdrop-filter: blur(18px) saturate(180%); border: 1.5px solid rgba(255,255,255,0.13); box-shadow: 0 6px 32px 0 rgba(30,41,59,0.10), 0 1.5px 6px 0 rgba(30,41,59,0.08); }
          `}</style>
        </div>
      </div>
    </motion.section>
  );
};

export default FaqsSection;
