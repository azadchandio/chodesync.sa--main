'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import '../../i18n';
import './page.css'
// import imageRight from '../../../../public/img/images-right.jpegx '

export default function AIAnalytics() {
  const { t } = useTranslation();

  const benefits = t('servicesPage.aiAnalytics.benefits.items', { returnObjects: true });
  const processSteps = t('servicesPage.aiAnalytics.process.steps', { returnObjects: true });

  return (
    <div className="service-detail-page">
      <PageHero
        subtitle={t('servicesPage.aiAnalytics.overview.title')}
        content={t('servicesPage.aiAnalytics.overview.subtitle')}
      />

      <div className="container services-container">

      <div className="services-detail">
      
      <div className='service-detail-left'>
      <h1>hello left</h1>
      <p>We are a leading mobile app development company in the USA, housing domain-savvy developers to design and develop Android, iOS and cross-platform applications customized to your business needs and identity. So, jump into the InvoZone bandwagon today and benefit from our exclusive value-added services!</p>
      </div>

      <div className='service-detail-right'>
      <h1>hello right</h1>
      <img src="/img/images-right.jpeg" alt="image-right" />

      </div>

      </div>

        <div className="service-content">
          <div className="service-overview">
            <h2>{t('servicesPage.aiAnalytics.overview.title')}</h2>
            <p>{t('servicesPage.aiAnalytics.overview.description')}</p>
          </div>

          <div className="service-benefits">
            <h2>{t('servicesPage.aiAnalytics.benefits.title')}</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <img 
                      src={`/img/icon/${index + 1}.svg`} 
                      alt={benefit.title} 
                      loading="lazy" // Improve performance with lazy loading
                    />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-process">
            <h2>{t('servicesPage.aiAnalytics.process.title')}</h2>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="step">
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}