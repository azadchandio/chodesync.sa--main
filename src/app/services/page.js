'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import '../i18n';

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

  return (
    
    <div className="">
       <PageHero
        subtitle={t('servicesPage.title')}
        content={t('servicesPage.subtitle')}
      />
      <div className="container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
