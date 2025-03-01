'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import '../../i18n';

export default function Careers() {
  const { t } = useTranslation();

  const categories = t('careersPage.positions.categories', { returnObjects: true }) || [];
  const benefits = t('careersPage.overview.benefits', { returnObjects: true }) || [];
  const applicationSteps = t('careersPage.application.steps', { returnObjects: true }) || [];

  return (
    <div className="careers-page">
      <PageHero
        subtitle={t('careersPage.hero.title')}
        content={t('careersPage.hero.subtitle')}
      />

      <div className="container">
        <div className="careers-content">
          <div className="careers-overview">
            <p className="lead-text">{t('careersPage.hero.description')}</p>
          </div>

          <div className="why-join-section">
            <h2>{t('careersPage.overview.title')}</h2>
            <p className="section-description">{t('careersPage.overview.description')}</p>
            
            <div className="benefits-grid">
              {Array.isArray(benefits) && benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <img src={`/img/careers/benefits-${index + 1}.svg`} alt={benefit.title} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="positions-section">
            <h2>{t('careersPage.positions.title')}</h2>
            <p className="section-description">{t('careersPage.positions.description')}</p>

            {Array.isArray(categories) && categories.map((category, cIndex) => (
              <div key={cIndex} className="position-category">
                <h3>{category.name}</h3>
                <div className="positions-grid">
                  {Array.isArray(category.roles) && category.roles.map((role, rIndex) => (
                    <div key={rIndex} className="position-card">
                      <h4>{role.title}</h4>
                      <div className="position-meta">
                        <span className="position-type">{role.type}</span>
                        <span className="position-location">{role.location}</span>
                      </div>
                      <p className="position-description">{role.description}</p>
                      <div className="position-requirements">
                        <h5>Requirements:</h5>
                        <ul>
                          {Array.isArray(role.requirements) && role.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="apply-button">Apply Now</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="application-process">
            <h2>{t('careersPage.application.title')}</h2>
            <div className="application-steps">
              {Array.isArray(applicationSteps) && applicationSteps.map((step, index) => (
                <div key={index} className="application-step">
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
