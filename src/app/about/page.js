'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import '../i18n';

export default function About() {
  const { t } = useTranslation();

  const missionPoints = t('aboutPage.mission.points', { returnObjects: true });
  const values = t('aboutPage.values.items', { returnObjects: true });
  const teamMembers = t('aboutPage.team.members', { returnObjects: true });

  return (
    <div className="about-page">
      <PageHero
        subtitle={t('aboutPage.hero.title')}
        content={t('aboutPage.hero.subtitle')}
      />

      <div className="container">
        <div className="about-content">
          <div className="about-overview">
            <p className="lead-text">{t('aboutPage.hero.description')}</p>
          </div>

          <div className="mission-section">
            <h2>{t('aboutPage.mission.title')}</h2>
            <p>{t('aboutPage.mission.description')}</p>
            <div className="mission-points">
              {missionPoints.map((point, index) => (
                <div key={index} className="mission-point">
                  <div className="point-icon">
                    <img src={`/img/icon/${index + 14}.svg`} alt={point.title} />
                  </div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2>{t('aboutPage.values.title')}</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <img src={`/img/icon/${index + 17}.svg`} alt={value.title} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section">
            <h2>{t('aboutPage.team.title')}</h2>
            <p>{t('aboutPage.team.description')}</p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-photo">
                    <img src={`/img/team/member-${index + 1}.jpg`} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
