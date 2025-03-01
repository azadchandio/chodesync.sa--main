'use client';

import Link from 'next/link';
import React from 'react';
import Chat from './Chat';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className='hero-area'>
      <div className='container' data-aos='fade-up' data-aos-duration='1000'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='title'>
              {t('hero.title')} <br />
              <span>{t('hero.subtitle')}</span>
            </h1>
            <p className='mx-850 text-center'>
              {t('hero.description')}
            </p>
            <div
              className='hero-btn'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <Link href='/contact' className='btn btn-primary'>
                {t('hero.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
