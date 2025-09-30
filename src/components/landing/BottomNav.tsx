"use client";
import React from "react";

const sections = [
  { id: 'main', label: 'Home' },
  { id: 'threads', label: 'Threads' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'activities', label: 'Activities' },
  { id: 'profile', label: 'Profile' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'faqs', label: 'FAQs' },
];

const BottomNav: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center">
      <div
        className="border border-gray-700 rounded-full shadow-lg px-4 py-1 flex items-center"
        style={{
          minHeight: '44px',
          minWidth: 'fit-content',
          background: 'linear-gradient(90deg, rgba(30,30,30,0.85) 60%, rgba(60,60,80,0.65) 100%)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          boxShadow: '0 4px 24px 0 rgba(80,120,255,0.12), 0 1.5px 6px 0 rgba(30,41,59,0.10)'
        }}
      >
        <ul className="flex space-x-2">
          {sections.map(s => (
            <li key={s.id}>
              <button
                className="text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition"
                style={{ minWidth: '60px' }}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;
