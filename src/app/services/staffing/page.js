'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import Brand from '../../components/Brand';
import Newsletter from '../../components/Newsletter';
import '../../i18n';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Staffing() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
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

  const features = [
    t('servicesPage.staffing.features.f1'),
    t('servicesPage.staffing.features.f2'),
    t('servicesPage.staffing.features.f3'),
  ];

  const benefits = t('servicesPage.staffing.benefits.items', { returnObjects: true });
  const process = t('servicesPage.staffing.process.steps', { returnObjects: true });

  return (
    <>
      <div className='percentage-bar'></div>
      <PageHero
        title={t('servicesPage.staffing.overview.title')}
        subtitle={t('servicesPage.staffing.overview.subtitle')}
        content={t('servicesPage.staffing.overview.description')}
      />

      {/* Key Features Section */}
      <div className='section-padding pt-5'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-title text-center'>
                  <h2 className='title-2'>
                    Key <span>Features</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='row gy-4'>
              {features.map((feature, index) => (
                <div key={index} className='col-md-4'>
                  <div className='feature-item' data-aos='fade-up' data-aos-delay={100 * index}>
                    <div className='feature-icon'>
                      <img src={`/img/icon/${index + 1}.svg`} alt={`Feature ${index + 1}`} />
                    </div>
                    <p className='feature-text'>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className='section-padding pt-5'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-title text-center'>
                  <h2 className='title-2'>
                    Our <span>Benefits</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='row gy-4'>
              {benefits.map((benefit, index) => (
                <div key={index} className='col-md-4'>
                  <div className='benefit-card' data-aos='fade-up' data-aos-delay={100 * index}>
                    <div className='benefit-icon'>
                      <img src={`/img/icon/${index + 8}.svg`} alt={benefit.title} />
                    </div>
                    <h3 className='benefit-title'>{benefit.title}</h3>
                    <p className='benefit-description'>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className='section-padding'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-title text-center'>
                  <h2 className='title-2'>
                    Our <span>Process</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='row gy-4'>
              {process.map((step, index) => (
                <div key={index} className='col-md-3'>
                  <div className='process-card' data-aos='fade-up' data-aos-delay={100 * index}>
                    <div className='process-number'>{index + 1}</div>
                    <h3 className='process-title'>{step.title}</h3>
                    <p className='process-description'>{step.description}</p>
                  </div>
                </div>
              ))}
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
