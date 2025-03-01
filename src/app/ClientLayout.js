'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import BootstrapClient from './components/BootstrapClient';
import { useLenis } from '@/hooks/useLenis';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    // If using Lenis instance
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <>
      <BootstrapClient />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
