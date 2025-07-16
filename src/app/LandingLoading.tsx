'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingLoading({ onFinish }: { onFinish?: () => void }) {
  const fullText = 'Welcome Portofolio\nRievan Averillio Fadhlan';
  const [typedText, setTypedText] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const typingSpeed = 100; // ms per character

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(typing);
        setDoneTyping(true);
        setTimeout(() => {
          setFadeOut(true);
        }, 1200);
      }
    }, typingSpeed);
    return () => clearInterval(typing);
  }, []);

  // Setelah fadeOut selesai, trigger onFinish
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 700); // durasi animasi fadeOut
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center h-screen w-screen bg-white"
      style={{ position: 'relative' }}
    >
      <AnimatePresence>
        {!(fadeOut) && (
          <motion.div
            key="loading-text"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3, transition: { duration: 0.7, ease: 'easeInOut' } }}
            className="text-center font-mono text-xl md:text-2xl text-gray-800 whitespace-pre-line relative z-10"
          >
            {typedText}
            {!doneTyping && <span className="blinking-cursor">|</span>}
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1px;
          background: #3b82f6;
          margin-left: 2px;
          animation: blink 1s steps(2, start) infinite;
          height: 1.25em;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
} 