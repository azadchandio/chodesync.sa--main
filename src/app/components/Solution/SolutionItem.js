import Image from 'next/image';
import Link from 'next/link';

export function SolutionItem({
  title,
  description,
  items,
  linkText,
  linkHref,
}) {
  return (
    <div className="solution-item">
      <div
        className="row align-items-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="col-md-6 pr-47">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={linkHref} className="btn btn-secondary">
            {linkText}
          </Link>
        </div>
        <div className="col-md-6 pl-47 mt-30">
          <div className="solution-item-list">
            {items.map((item, index) => (
              <div key={index} className="solution-single">
                <Image
                  src="/img/check.svg"
                  alt="check"
                  width={24}
                  height={56}
                />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
