'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Faq() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer')
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer')
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer')
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer')
    },
    {
      question: t('faq.questions.q5.question'),
      answer: t('faq.questions.q5.answer')
    }
  ];

  return (
    <div className='faq-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12' data-aos='fade-up' data-aos-duration='1000'>
            <h2 className='title-2'>
              {t('faq.title')} <span>{t('faq.titleHighlight')}</span>
            </h2>
          </div>
          <div className='col-md-12'>
            <div className='accordion' data-aos='fade-up' data-aos-duration='800'>
              {questions.map((item, index) => (
                <div className='accordion-item' key={index}>
                  <h2 className='accordion-header'>
                    <button
                      className={`accordion-button ${activeIndex !== index ? 'collapsed' : ''}`}
                      type='button'
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    style={{
                      maxHeight: activeIndex === index ? '1000px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-out'
                    }}
                  >
                    <div className='accordion-body'>
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
