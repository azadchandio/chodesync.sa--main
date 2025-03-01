'use client';
import { useEffect, useRef } from 'react';

export default function ScrollContainer({ children, className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add data attribute to prevent Lenis from smoothing this container
    container.setAttribute('data-lenis-prevent', '');

    return () => {
      container.removeAttribute('data-lenis-prevent');
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
