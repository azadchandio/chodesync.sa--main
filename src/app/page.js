'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Brand from './components/Brand';
import Faq from './components/Faq';
import FeatureItem from './components/FeatureItem';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Solution from './components/Solution';
import Price from './components/Pricing';
import Link from 'next/link';
import blogData from '/src/data/blog.json';
import BlogCard from './components/blogCard';
import { useTranslation } from 'react-i18next';
import './i18n';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize AOS for animations on scroll
    AOS.init({});

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
    <div className='overflow-hidden'>
      <div className='percentage-bar'></div>
      <Hero />
      <Brand />
      <div className='feature-area mt-192'>
        <div className='container'>
          <div className='row' data-aos='fade-up' data-aos-duration='1000'>
            <div className='col-md-12'>
              <h2 className='title-2'>
                {t('features.title')} <span>{t('features.titleHighlight')}</span>
              </h2>
            </div>
          </div>
          <div className='row gy-4'>
            <FeatureItem
              img='1'
              featureKey='aiAnalytics'
            />
            <FeatureItem
              img='2'
              featureKey='appsDev'
            />
            <FeatureItem
              img='3'
              featureKey='itStaffing'
            />
            <FeatureItem
              img='4'
              featureKey='aiConsultancy'
            />
          </div>
        </div>
      </div>
      <Solution />
      <Faq />
    </div>
  );
}
