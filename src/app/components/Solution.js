'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Solution() {
  const { t } = useTranslation();

  return (
    <div className='solution-area mtb-192'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h2 className='title-2'>
              {t('solution.title')} <span>{t('solution.titleHighlight')}</span>
            </h2>
          </div>
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
                    alt='solution'
                    width={569}
                    height={501}
                  />
                </div>
                <div className='col-md-6 pl-47'>
                  <h3>{t('solution.section1.title')}</h3>
                  <p>{t('solution.section1.description')}</p>
                  <Link href='./integrations' className='btn btn-secondary'>
                    {t('solution.section1.learnMore')}
                  </Link>
                </div>
              </div>
            </div>
            <div className='solution-item'>
              <div
                className='row align-items-center'
                data-aos='fade-up'
                data-aos-duration='800'
              >
                <div className='col-md-6 pr-47'>
                  <h3>{t('solution.section2.title')}</h3>
                  <p>{t('solution.section2.description')}</p>
                  <Link href='./integrations' className='btn btn-secondary'>
                    {t('solution.section2.learnMore')}
                  </Link>
                </div>
                <div className='col-md-6 pl-47 mt-30'>
                  <div className='solution-item-list'>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('solution.section2.features.automation.title')}</h4>
                        <p>{t('solution.section2.features.automation.description')}</p>
                      </div>
                    </div>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('solution.section2.features.ml.title')}</h4>
                        <p>{t('solution.section2.features.ml.description')}</p>
                      </div>
                    </div>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('solution.section2.features.chatbots.title')}</h4>
                        <p>{t('solution.section2.features.chatbots.description')}</p>
                      </div>
                    </div>
                    <div className='solution-single'>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>{t('solution.section2.features.consultancy.title')}</h4>
                        <p>{t('solution.section2.features.consultancy.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
