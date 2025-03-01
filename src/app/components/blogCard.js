import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({
  img,
  uName,
  date,
  title,
  details,
  btn,
  id,
}) {
  return (
    <div className='col-md-12 col-sm-12 col-lg-6'>
      <div data-aos='fade-up' data-aos-duration='1000'>
        <div className='insight-single-card'>
          <Image src={`/img/${img}`} width='566' height='284' alt='' className='w-full h-full' />
          <div className='card-date'>
            <h6>
              <Link href='/blogAuthor'>{uName}</Link>
            </h6>
            <svg
              width='2'
              height='2'
              viewBox='0 0 2 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.374 1.862C1.194 1.862 1.04 1.802 0.912 1.682C0.784 1.558 0.72 1.404 0.72 1.22C0.72 1.036 0.784 0.884 0.912 0.764C1.04 0.64 1.194 0.578 1.374 0.578C1.546 0.578 1.692 0.64 1.812 0.764C1.936 0.884 1.998 1.036 1.998 1.22C1.998 1.404 1.936 1.558 1.812 1.682C1.692 1.802 1.546 1.862 1.374 1.862Z'
                fill='#A6A6C9'
              ></path>
            </svg>
            <p style={{ margin: 0 }}>
              <Link href='/blogArchive'>{date}</Link>
            </p>
          </div>
          <Link className='card-title' href='/blogDetails'>
            {title}
          </Link>
          <p>{details}</p>
          <div className='card-btn'>
            <Link href='/blogTag'>{btn}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
