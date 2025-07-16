// Lenis smooth scroll initialization for Next.js/React
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenisSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // slow and smooth
      // smooth: true, // Not needed for Lenis v1+, default is smooth
      gestureOrientation: 'vertical',
      // smoothTouch: true, // Not needed for Lenis v1+, removed for compatibility
      touchMultiplier: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutQuad
    });

    let frameId: number; // To store the ID of the requestAnimationFrame call

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf); // Recursively call raf
    }

    frameId = requestAnimationFrame(raf); // Initial call to start the loop

    return () => {
      cancelAnimationFrame(frameId); // Clean up on unmount
      lenis.destroy();
    };
  }, []);
}
