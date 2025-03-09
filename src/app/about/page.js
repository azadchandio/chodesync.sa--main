'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../i18n';

export default function About() {
  const { t } = useTranslation();

  const missionPoints = t('aboutPage.mission.points', { returnObjects: true });
  const values = t('aboutPage.values.items', { returnObjects: true });
  const teamMembers = t('aboutPage.team.members', { returnObjects: true });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      // Disable AOS on mobile for better performance
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

  return (
    <>
      <div className='percentage-bar'></div>
      <PageHero
        subtitle={t('aboutPage.hero.title')}
        content={t('aboutPage.hero.subtitle')}
      />

      <div className='solution-area mtb-192'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-md-12'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h2 className='title-2'>
                {t('aboutPage.hero.title')} <span>{t('aboutPage.hero.subtitle')}</span>
              </h2>
              <p className="lead-text" data-aos='fade-up' data-aos-duration='800'>{t('aboutPage.hero.description')}</p>
            </div>

            {/* Mission Section */}
            <div className='col-md-12'>
              <div className='solution-item'>
                <div
                  className='row align-items-center'
                  data-aos='fade-up'
                  data-aos-duration='800'
                >
                  <div className='col-md-6 pr-47'>
                    <Image
                      src='/img/solution.svg'
                      alt='mission'
                      width={569}
                      height={501}
                    />
                  </div>
                  <div className='col-md-6 pl-47'>
                    <h3>{t('aboutPage.mission.title')}</h3>
                    <p>{t('aboutPage.mission.description')}</p>
                  </div>
                </div>
              </div>

              {/* Mission Points */}
              <div className='solution-item'>
                <div
                  className='row align-items-center'
                  data-aos='fade-up'
                  data-aos-duration='800'
                >
                  <div className='col-md-6 pr-47'>
                    <h3>{t('aboutPage.mission.title')}</h3>
                    <p>{t('aboutPage.mission.description')}</p>
                  </div>
                  <div className='col-md-6 pl-47 mt-30'>
                    <div className='solution-item-list'>
                      {missionPoints.map((point, index) => (
                        <div className='solution-single' key={index}>
                          <Image
                            src='/img/check.svg'
                            alt='check'
                            width={24}
                            height={56}
                          />
                          <div>
                            <h4>{point.title}</h4>
                            <p>{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Values Section */}
              <div className='solution-item'>
                <div
                  className='row'
                  data-aos='fade-up'
                  data-aos-duration='800'
                >
                  <div className='col-md-12'>
                    <h2 className='title-2'>{t('aboutPage.values.title')}</h2>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      {values.map((value, index) => (
                        <div className='col-md-6 col-lg-3 mb-4' key={index} data-aos='fade-up' data-aos-duration='800' data-aos-delay={index * 100}>
                          <div className='value-card p-4'>
                            <div className='value-icon mb-3'>
                              <Image
                                src={`/img/icon/${index + 17}.svg`}
                                alt={value.title}
                                width={64}
                                height={64}
                              />
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <div className='solution-item'>
                <div
                  className='row'
                  data-aos='fade-up'
                  data-aos-duration='800'
                >
                  <div className='col-md-12'>
                    <h2 className='title-2'>{t('aboutPage.team.title')}</h2>
                    <p className='mb-5'>{t('aboutPage.team.description')}</p>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      {teamMembers.map((member, index) => (
                        <div className='col-md-6 col-lg-3 mb-4' key={index} data-aos='fade-up' data-aos-duration='800' data-aos-delay={index * 100}>
                          <div className='team-member p-4'>
                            <div className='member-photo mb-3'>
                              <Image
                                src={`/img/team/member-${index + 1}.jpg`}
                                alt={member.name}
                                width={250}
                                height={250}
                              />
                            </div>
                            <h3>{member.name}</h3>
                            <h4 className='text-muted'>{member.role}</h4>
                            <p>{member.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Brand />
      <div className='mt-192'>
        <Newsletter />
      </div>
    </>
  );
}