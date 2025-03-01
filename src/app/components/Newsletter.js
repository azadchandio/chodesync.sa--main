'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    // Here you would typically send the email to your backend
    setStatus('success');
    setEmail('');
    // Reset status after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className='newsletter-area mtb-100'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='newsletter-content text-center'>
              <h2>{t('newsletter.title')}</h2>
              <p>{t('newsletter.description')}</p>
              <form onSubmit={handleSubmit} className='newsletter-form'>
                <div className='input-group'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter.emailPlaceholder')}
                    className={status === 'error' ? 'error' : ''}
                    aria-label={t('newsletter.emailPlaceholder')}
                  />
                  <button type='submit' className='btn btn-primary'>
                    {t('newsletter.subscribeButton')}
                  </button>
                </div>
                {status === 'error' && (
                  <p className='error-message mt-2'>
                    {t('newsletter.errorMessage')}
                  </p>
                )}
                {status === 'success' && (
                  <p className='success-message mt-2'>
                    {t('newsletter.successMessage')}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
