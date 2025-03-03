'use client';

import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300); // Match this with CSS transition duration
  };

  return (
    <LanguageContext.Provider value={{ isTransitioning, startTransition }}>
      <div className={`fade-transition ${isTransitioning ? 'switching' : ''}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext); 