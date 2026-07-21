import Image from "next/image";
import Link from "next/link";
import {
  cv,
  displayName,
  heroSummary,
  whatsappUrl,
} from "../lib/cv";

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-greeting reveal reveal-delay-1">
            {cv.basics.headline}
          </p>
          <h1 className="hero-title reveal reveal-delay-2">{displayName}</h1>
          <p className="hero-subtitle reveal reveal-delay-3">{heroSummary}</p>
          <div className="hero-meta reveal reveal-delay-4">
            <span className="hero-tag">
              {cv.yearsOfExperience}+ años de experiencia
            </span>
            <span className="hero-tag">{cv.basics.location}</span>
            <span className="hero-tag">{cv.basics.availability}</span>
          </div>
          <div className="hero-actions reveal reveal-delay-5">
            <a
              href={whatsappUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Escríbeme
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver proyectos
            </a>
            <Link
              href="/experiencia/"
              className="btn btn-secondary"
              transitionTypes={["page-forward"]}
            >
              Experiencia
            </Link>
          </div>
        </div>

        <div className="hero-portrait reveal reveal-delay-3">
          <svg className="hero-portrait-defs" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="hero-portrait-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.78 0.08C0.9 0.16 0.97 0.3 0.98 0.46C0.99 0.62 0.94 0.78 0.82 0.88C0.7 0.98 0.52 1.02 0.36 0.97C0.2 0.92 0.08 0.8 0.04 0.64C0 0.48 0.04 0.3 0.14 0.18C0.24 0.06 0.42 0 0.58 0.02C0.66 0.03 0.72 0.05 0.78 0.08Z" />
              </clipPath>
            </defs>
          </svg>
          <div className="hero-portrait-frame">
            <Image
              src="/andres.jpeg"
              alt={displayName}
              width={480}
              height={480}
              priority
              className="hero-portrait-image"
              sizes="(max-width: 768px) 240px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
