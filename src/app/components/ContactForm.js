'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
    agreedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      jobTitle: '',
      emailAddress: '',
      phoneNumber: '',
      message: '',
      agreedTerms: false,
    });
  };

  return (
    <div className='contact-area mtb-192'>
      <div className='container'>
        <div className='row' data-aos='fade-up' data-aos-duration='1000'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='title-2'>
                {t('contactForm.title')} <span>{t('contactForm.titleHighlight')}</span>
              </h2>
            </div>
            <div className='col-md-12 col-lg-6' data-aos='fade-up' data-aos-duration='1000'>
              <div className='contact-content'>
                <Image src='/img/logo.svg' alt='logo' width={139} height={32} />
                <p>{t('contactForm.description')}</p>
                <h3>{t('contactForm.contactPerson.name')}</h3>
                <h4>{t('contactForm.contactPerson.position')}</h4>
                <h5>{t('contactForm.trustedBy')}</h5>
                <div className='contact-brand'>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <Image
                      key={num}
                      src={`/img/brand/${num}.png`}
                      alt={`brand-${num}`}
                      width={190}
                      height={76}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-6' data-aos='fade-up' data-aos-duration='1000'>
              <div className='contact-form'>
                <h2>{t('contactForm.formTitle')}</h2>
                <p>{t('contactForm.formSubtitle')}</p>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder={t('contactForm.fields.firstName')}
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type='text'
                        placeholder={t('contactForm.fields.lastName')}
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder={t('contactForm.fields.companyName')}
                        name='companyName'
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type='text'
                        placeholder={t('contactForm.fields.jobTitle')}
                        name='jobTitle'
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='input-group'>
                      <input
                        type='email'
                        placeholder={t('contactForm.fields.emailAddress')}
                        name='emailAddress'
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type='text'
                        placeholder={t('contactForm.fields.phoneNumber')}
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <input
                      type='text'
                      placeholder={t('contactForm.fields.message')}
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexCheckDefault'
                      name='agreedTerms'
                      checked={formData.agreedTerms}
                      onChange={handleChange}
                      required
                    />
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                      {t('contactForm.agreement')}
                    </label>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    {t('contactForm.submitButton')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
