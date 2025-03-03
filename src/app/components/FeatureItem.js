'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function FeatureItem({ img, featureKey }) {
  const { t } = useTranslation();

  return (
    <div
      className='col-md-4'
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
    >
      <div className='feature-item'>
        <div className='feature-icon'>
          <Image
            src={`/img/icon/${img}.svg`}
            alt={t(`features.items.${featureKey}.title`)}
            width={80}
            height={80}
          />
        </div>  
        <h3>{t(`features.items.${featureKey}.title`)}</h3>
        <p>{t(`features.items.${featureKey}.content`)}</p>
      </div>
    </div>
  );
}
