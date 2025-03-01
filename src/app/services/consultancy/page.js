'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import '../../i18n';

export default function Consultancy() {
  const { t } = useTranslation();

  const benefits = t('servicesPage.consultancy.benefits.items', { returnObjects: true });

  return (
    <div className="service-detail-page">
      <PageHero
        subtitle={t('servicesPage.consultancy.overview.title')}
        content={t('servicesPage.consultancy.overview.subtitle')}
      />

      <div className="container">
        <div className="service-content">
          <div className="service-overview">
            <h2>{t('servicesPage.consultancy.overview.title')}</h2>
            <p>{t('servicesPage.consultancy.overview.description')}</p>
          </div>

          <div className="service-benefits">
            <h2>{t('servicesPage.consultancy.benefits.title')}</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <img src={`/img/icon/${index + 11}.svg`} alt={benefit.title} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-process">
            <h2>{t('servicesPage.consultancy.process.title')}</h2>
            <div className="process-steps">
              {t('servicesPage.consultancy.process.steps', { returnObjects: true }).map((step, index) => (
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
