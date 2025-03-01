'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import '../../i18n';

export default function Development() {
  const { t } = useTranslation();

  const benefits = t('servicesPage.development.benefits.items', { returnObjects: true });

  return (
    <div className="service-detail-page">
      <PageHero
        subtitle={t('servicesPage.development.overview.title')}
        content={t('servicesPage.development.overview.subtitle')}
      />

      <div className="container">
        <div className="service-content">
          <div className="service-overview">
            <h2>{t('servicesPage.development.overview.title')}</h2>
            <p>{t('servicesPage.development.overview.description')}</p>
          </div>

          <div className="service-benefits">
            <h2>{t('servicesPage.development.benefits.title')}</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <img src={`/img/icon/${index + 5}.svg`} alt={benefit.title} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-process">
            <h2>{t('servicesPage.development.process.title')}</h2>
            <div className="process-steps">
              {t('servicesPage.development.process.steps', { returnObjects: true }).map((step, index) => (
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
