'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import '../../i18n';

export default function Events() {
  const { t } = useTranslation();

  const events = [
    {
      image: '/img/events/event1.jpg',
      title: t('about.events.list.e1.title'),
      date: t('about.events.list.e1.date'),
      location: t('about.events.list.e1.location'),
      description: t('about.events.list.e1.description')
    },
    {
      image: '/img/events/event2.jpg',
      title: t('about.events.list.e2.title'),
      date: t('about.events.list.e2.date'),
      location: t('about.events.list.e2.location'),
      description: t('about.events.list.e2.description')
    },
    {
      image: '/img/events/event3.jpg',
      title: t('about.events.list.e3.title'),
      date: t('about.events.list.e3.date'),
      location: t('about.events.list.e3.location'),
      description: t('about.events.list.e3.description')
    }
  ];

  const EventCard = ({ event }) => (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <div className="event-meta">
          <span className="event-date">
            <FaCalendar className="icon" />
            {event.date}
          </span>
          <span className="event-location">
            <FaMapMarkerAlt className="icon" />
            {event.location}
          </span>
        </div>
        <p>{event.description}</p>
        <Link href="#register" className="btn btn-secondary">
          {t('about.events.register')}
        </Link>
      </div>
    </div>
  );

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="container">
          <h1>{t('about.events.title')}</h1>
          <p>{t('about.events.subtitle')}</p>
        </div>
      </section>

      <section className="container">
        <div className="events-content">
          <div className="events-intro">
            <h2>{t('about.events.intro.title')}</h2>
            <p>{t('about.events.intro.description')}</p>
          </div>

          <div className="events-grid">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>

          <div className="upcoming-events">
            <h2>{t('about.events.upcoming.title')}</h2>
            <p>{t('about.events.upcoming.description')}</p>
            <Link href="#subscribe" className="btn btn-primary">
              {t('about.events.upcoming.subscribe')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
