"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "@/components/react-bits/Particles";
import CardSwap, { Card } from "@/components/react-bits/CardSwap";
import Image from "next/image";
import { ArrowRight, Monitor, Target, Layers, Paintbrush, LayoutGrid } from "lucide-react";

const PortfolioSection: React.FC = () => {
  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full py-16 px-12 flex justify-center relative"
      style={{ background: "transparent" }}
    >
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
              <a
                href="/project"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
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
              onCardClick={(idx) => {
                if (typeof window !== "undefined") {
                  const event = new CustomEvent("cardSwapToBack", { detail: { idx } });
                  window.dispatchEvent(event);
                }
              }}
            >
              <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                <div className="w-full h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/project/cheator.png" alt="Cheator Project" width={420} height={200} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Monitor size={20} className="text-blue-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Cheator</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Cheating Detector Web App with Real-time Analysis and Reporting</p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Vanila</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">HTML</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                <div className="w-full h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/project/banjay.png" alt="Banjay Project" width={420} height={200} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Target size={20} className="text-green-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Banjay</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Website for flood monitoring based on AI and satellite data</p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">Typescript</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                <div className="w-full h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/project/minigold.png" alt="Mini Gold Project" width={420} height={200} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Layers size={20} className="text-purple-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">MiniGold</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Online gold sales website</p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">Typescript</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                <div className="w-full h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/project/Osila.png" alt="Osila Project" width={420} height={200} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Paintbrush size={20} className="text-orange-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Osila</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Online villa and accommodation booking platform</p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Typescript</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="project-card bg-[#1a1a1a] border-gray-700 overflow-hidden transition-all duration-300">
                <style>{`
                  .project-card { cursor: pointer; will-change: transform, box-shadow; }
                  .project-card:hover { transform: translateY(-10px) scale(1.035) rotate(-1deg); box-shadow: 0 12px 40px 0 rgba(80,120,255,0.18), 0 2px 8px 0 rgba(30,41,59,0.10); border-color: #60a5fa; }
                `}</style>
                <div className="w-full h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/project/bakashop.png" alt="DataFlow Project" width={420} height={200} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <LayoutGrid size={20} className="text-indigo-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">BakaShop</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Platform e-commerce untuk pembelian berbagai jaket vintage</p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">Laravel</span>
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">PHP</span>
                    </div>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default PortfolioSection;
