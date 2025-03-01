'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../i18n';

export default function Contact() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      // Disable AOS on mobile for better performance
      disable: window.innerWidth < 768,
    });

    const percentageBar = document.querySelector('.percentage-bar');

    function updateScrollPercentage() {
      if (percentageBar) {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const percentage =
          Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + '%';

        percentageBar.style.width = percentage;
      }
    }

    window.addEventListener('scroll', updateScrollPercentage);
    window.addEventListener('load', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
      window.removeEventListener('load', updateScrollPercentage);
    };
  }, []);
  return (
    <>
      <div className='percentage-bar'></div>
      <PageHero
        title={t('contactPage.hero.title')}
        subtitle={t('contactPage.hero.subtitle')}
        content={t('contactPage.hero.content')}
      />
      <ContactForm />
      <Faq />
    </>
  );
}
