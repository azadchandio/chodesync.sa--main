'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ({ scroll, limit }) => {
      const percentageBar = document.querySelector('.percentage-bar');
      if (percentageBar) {
        const percentage =
          Math.min(100, Math.floor((scroll / limit) * 100)) + '%';
        percentageBar.style.width = percentage;
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
