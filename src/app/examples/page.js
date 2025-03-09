'use client';
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Solution from '../components/Solution';
import Brand from '../components/Brand';
import Link from 'next/link';
import Image from 'next/image';
import Newsletter from '../components/Newsletter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../i18n'
import { useTranslation } from 'react-i18next';

export default function Examples() {
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
        title={t('servicesPage.aiAnalytics.overview.title')}
        content={t('servicesPage.aiAnalytics.overview.subtitle')}
          />
      {/* <Solution /> */}
      <div className='solution-area mtb-192'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h2 className='title-2'>
              {t('servicesPage.aiAnalytics.overview.title')} <span>{t('servicesPage.aiAnalytics.overview.subtitle')}</span>
            </h2>
          </div>
          <div className='col-md-12'>
            <div className='solution-item'>
              <div
                className='row align-items-center'
                data-aos='fade-up'
                data-aos-duration='800'
              >
                <div className='col-md-6 pr-47'>
                  <Image
                    src='/img/solution.svg'
                    alt='solution'
                    width={569}
                    height={501}
                  />
                </div>
                <div className='col-md-6 pl-47'>
                  <h3>{t('servicesPage.aiAnalytics.features.f1')}</h3>
                  <p>{t('servicesPage.aiAnalytics.overview.description')}</p>
                  <Link href='./integrations' className='btn btn-secondary'>
                    {t('servicesPage.aiAnalytics.benefits.title')}
                  </Link>
                </div>
              </div>
            </div>
            <div className='solution-item'>
              <div
                className='row align-items-center'
                data-aos='fade-up'
                data-aos-duration='800'
              >
                <div className='col-md-6 pr-47'>
                  <h3>{t('servicesPage.aiAnalytics.process.title')}</h3>
                  <p>{t('servicesPage.aiAnalytics.features.f2')}</p>
                  <Link href='./integrations' className='btn btn-secondary'>
                    {t('servicesPage.aiAnalytics.benefits.items[0].title')}
                  </Link>
                </div>
                <div className='col-md-6 pl-47 mt-30'>
                  <div className='solution-item-list'>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('servicesPage.aiAnalytics.process.steps[0].title')}</h4>
                        <p>{t('servicesPage.aiAnalytics.process.steps[0].description')}</p>
                      </div>
                    </div>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('servicesPage.aiAnalytics.process.steps[1].title')}</h4>
                        <p>{t('servicesPage.aiAnalytics.process.steps[1].description')}</p>
                      </div>
                    </div>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('servicesPage.aiAnalytics.process.steps[2].title')}</h4>
                        <p>{t('servicesPage.aiAnalytics.process.steps[2].description')}</p>
                      </div>
                    </div>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('servicesPage.aiAnalytics.process.steps[3].title')}</h4>
                        <p>{t('servicesPage.aiAnalytics.process.steps[3].description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Brand />
      <div className='mt-192'>
        <Newsletter />
      </div>
    </>
  );
}
