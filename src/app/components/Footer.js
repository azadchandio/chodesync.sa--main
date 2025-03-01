'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <Image src="/img/logo.svg" alt="logo" width={139} height={32} />
            <p>{t('footer.description')}</p>
          </div>
          <div className="col-md-6">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>{t('footer.services.title')}</h2>
                  <ul>
                  <li><Link href="/services/ai-analytics">{t('services.aiDataAnalytics')}</Link></li>
                        <li><Link href="/services/development">{t('services.appsDevelopment')}</Link></li>
                        <li><Link href="/services/staffing">{t('services.itStaffing')}</Link></li>
                        <li><Link href="/services/consultancy">{t('services.aiConsultancy')}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>{t('footer.about.title')}</h2>
                  <ul>
                  <li><Link href="/about">{t('footer.about.partners')}</Link></li>
                        <li><Link href="/about/team">{t('footer.about.team')}</Link></li>
                        <li><Link href="/about/careers">{t('footer.about.careers')}</Link></li>
                        <li><Link href="/about/events">{t('footer.about.events')}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>{t('footer.extra.title')}</h2>
                  <ul>
                    <li>
                      <Link href="/contact">{t('footer.extra.contactUs')}</Link>
                    </li>
                    <li>
                      <Link href="#">{t('footer.extra.pdpl')}</Link>
                    </li>
                    <li>
                      <Link href="#">{t('footer.extra.terms')}</Link>
                    </li>
                    <li>
                      <Link href="#">{t('footer.extra.privacy')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row gy-2">
            <div className="col-md-6 align-self-center">
              <p>{t('footer.copyright')}</p>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <Link href="/terms-of-service">{t('footer.links.terms')}</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">{t('footer.links.privacy')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
