'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function ServiceItem({ service }) {
  const { t } = useTranslation();

  return (
    <div
      className='col-md-4'
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
    >
      <div className='feature-item service-card'>
        <div className='feature-icon'>
          <Image
            src={service.icon}
            alt={service.title}
            width={80}
            height={80}
          />
        </div>
        <h3 className="feature-title">{service.title}</h3>
        <p className='feature-description'>{service.description}</p>
        <ul className='feature-list'>
          {service.features.map((feature, index) => (
            <li key={index} className='feature-list-item'>
              <span className='feature-check'>
                <i className='bi bi-check2-circle'></i>
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <Link 
          href={`/services/${service.id}`}
          className='btn btn-primary btn-with-arrow'
        >
          Learn More
          <svg 
            className="btn-arrow" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4.16666 10H15.8333" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M10.8333 5L15.8333 10L10.8333 15" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 