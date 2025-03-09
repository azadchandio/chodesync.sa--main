'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import ServiceItem from '../components/ServiceItem';
import Brand from '../components/Brand';
import '../i18n';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'ai-analytics',
      icon: '/img/icon/1.svg',
      title: t('servicesPage.aiAnalytics.overview.title'),
      description: t('servicesPage.aiAnalytics.overview.description'),
      features: [
        t('servicesPage.aiAnalytics.features.f1'),
        t('servicesPage.aiAnalytics.features.f2'),
        t('servicesPage.aiAnalytics.features.f3'),
      ]
    },
    {
      id: 'development',
      icon: '/img/icon/2.svg',
      title: t('servicesPage.development.overview.title'),
      description: t('servicesPage.development.overview.description'),
      features: [
        t('servicesPage.development.features.f1'),
        t('servicesPage.development.features.f2'),
        t('servicesPage.development.features.f3'),
      ]
    },
    {
      id: 'staffing',
      icon: '/img/icon/3.svg',
      title: t('servicesPage.staffing.overview.title'),
      description: t('servicesPage.staffing.overview.description'),
      features: [
        t('servicesPage.staffing.features.f1'),
        t('servicesPage.staffing.features.f2'),
        t('servicesPage.staffing.features.f3'),
      ]
    },
    {
      id: 'consultancy',
      icon: '/img/icon/4.svg',
      title: t('servicesPage.consultancy.overview.title'),
      description: t('servicesPage.consultancy.overview.description'),
      features: [
        t('servicesPage.consultancy.features.f1'),
        t('servicesPage.consultancy.features.f2'),
        t('servicesPage.consultancy.features.f3'),
      ]
    }
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      disable: window.innerWidth < 768,
    });
  }, []);

  return (
    <>
      <div className='percentage-bar'></div>
      <PageHero
        title='Effortless'
        subtitle='Integrations & Services'
        content='Easily connect tools, databases, or import files with just a few
              clicks. Assistify seamlessly integrates with various platforms and
              file formats, ensuring a smooth experience. Additionally, explore our comprehensive services tailored to your needs.'
      />
      <div className='services-area section-padding'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-title text-center'>
                  <h2 className='title-2'>
                    Our <span>Services</span>
                  </h2>
                  <p className='section-description'>
                    Comprehensive solutions tailored to your needs
                  </p>
                </div>
              </div>
            </div>
            <div className='row gy-4'>
              {services.map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='feature-area mt-192'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='title-2'>
                  Elevate Your Productivity <span>to New Heights</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mtb-192'>
        <Brand />
      </div>
    </>
  );
}
