'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/PageHero';
import '../../i18n';

export default function Team() {
  const { t } = useTranslation();

  // Ensure we're getting the correct path from the translation file and handle potential undefined values
  const departments = t('aboutPage.teamPage.departments.items', { returnObjects: true });
  const benefits = t('aboutPage.teamPage.joinTeam.benefits', { returnObjects: true });

  return (
    <div className="team-page">
      <PageHero
        subtitle={t('aboutPage.teamPage.hero.title')}
        content={t('aboutPage.teamPage.hero.subtitle')}
      />

      <div className="container">
        <div className="team-content">
          <div className="team-overview">
            <p className="lead-text">{t('aboutPage.teamPage.hero.description')}</p>
          </div>

          <div className="departments-section">
            <h2>{t('aboutPage.teamPage.departments.title')}</h2>
            <p className="section-description">{t('aboutPage.teamPage.departments.description')}</p>
            
            {Array.isArray(departments) && departments.map((department, dIndex) => (
              <div key={dIndex} className="department-block">
                <div className="department-header">
                  <h3>{department.name}</h3>
                  <p>{department.description}</p>
                </div>
                <div className="department-members">
                  {Array.isArray(department.members) && department.members.map((member, mIndex) => (
                    <div key={mIndex} className="team-member-card">
                      <div className="member-photo">
                        <img src={`/img/team/${member.image}`} alt={member.name} />
                      </div>
                      <div className="member-info">
                        <h4>{member.name}</h4>
                        <h5>{member.role}</h5>
                        <p>{member.bio}</p>
                        <div className="member-expertise">
                          {Array.isArray(member.expertise) && member.expertise.map((skill, sIndex) => (
                            <span key={sIndex} className="expertise-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="join-team-section">
            <h2>{t('aboutPage.teamPage.joinTeam.title')}</h2>
            <p className="section-description">{t('aboutPage.teamPage.joinTeam.description')}</p>
            <div className="benefits-grid">
              {Array.isArray(benefits) && benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <img src={`/img/icons/${index + 1}.svg`} alt={benefit.title} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
