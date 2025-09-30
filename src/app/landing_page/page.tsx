'use client';
import React from 'react';
import { useLenisSmoothScroll } from '@/lib/useLenisSmoothScroll';
import Footer from "@/components/template/Footer";
import HeroSection from '@/components/landing/HeroSection';
import ThreadsSection from '@/components/landing/ThreadsSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import ActivitiesSection from '@/components/landing/ActivitiesSection';
import ProfileSection from '@/components/landing/ProfileSection';
import AchievementsSection from '@/components/landing/AchievementsSection';
import FaqsSection from '@/components/landing/FaqsSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import BottomNav from '@/components/landing/BottomNav';
import LandingGlobalStyles from '@/components/landing/LandingGlobalStyles';

const App: React.FC = () => {
    useLenisSmoothScroll();
    return (
        <div className="relative flex min-h-screen flex-col bg-[#18181b] font-inter overflow-x-hidden">
      <HeroSection />

            {/* Threads Animation Section */}
      <ThreadsSection />

            {/* New Portfolio Section with CardSwap */}
      <PortfolioSection />


            {/* Activities Infinite Scroll Section */}
      <ActivitiesSection />
            {/* Activity Section (lama) */}
            {/* <ActivitySection /> */}

            {/* Profile Section */}
            <ProfileSection />

            {/* Achievements Section - Circular Gallery */}
            <AchievementsSection />

            {/* FAQs Section */}
            <FaqsSection />

            {/* Final Call to Action Section */}
            <FinalCtaSection />

      <LandingGlobalStyles />
        {/* Bottom Navbar Section */}
        <BottomNav />
        {/* Footer Section */}
        <Footer />
      </div>
    );
};

export default App;