'use client';
import { useEffect } from 'react';

export function useScrollPercentage() {
  useEffect(() => {
    const percentageBar = document.querySelector('.percentage-bar');

    // Only add native scroll listeners if Lenis is not present
    if (!window.lenis) {
      function updateScrollPercentage() {
        if (percentageBar) {
          const scrollTop = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
          const percentage =
            Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) +
            '%';

          percentageBar.style.width = percentage;
        }
      }

      window.addEventListener('scroll', updateScrollPercentage);
      window.addEventListener('load', updateScrollPercentage);

      return () => {
        window.removeEventListener('scroll', updateScrollPercentage);
        window.removeEventListener('load', updateScrollPercentage);
      };
    }
  }, []);
}
