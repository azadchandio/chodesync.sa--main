'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import '../../i18n';

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

      <div className="container">
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