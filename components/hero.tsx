import Link from "next/link";
import {
  cv,
  displayName,
  heroSummary,
} from "../lib/cv";

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting reveal reveal-delay-1">{cv.basics.headline}</p>
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
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <Link
            href="/experiencia/"
            className="btn btn-secondary"
            transitionTypes={["page-forward"]}
          >
            Experiencia
          </Link>
          <a href="#contact" className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
