import Card from "./card";
import { IconCodepen } from "./icons";
import { demoProjects, featuredProjects } from "../lib/cv";

const Projects = () => {
  const featured = featuredProjects[0];

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <p className="section-label">Portafolio</p>
        <h2 className="section-title">Proyectos seleccionados</h2>

        {featured && (
          <article className="featured-project">
            <div className="featured-project-header">
              <p className="section-label">{featured.role}</p>
              <h3 className="featured-project-title">{featured.name}</h3>
              <p className="featured-project-status">{featured.status}</p>
            </div>
            <p className="featured-project-desc">{featured.description}</p>
            <ul className="featured-project-highlights">
              {featured.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="tech-tags">
              {featured.technologies.map((tech) => (
                <li key={tech} className="tech-tag">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        )}

        <div className="projects-grid">
          {demoProjects.map(({ url, image, title, description }) => (
            <Card
              key={url}
              url={url}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://codepen.io/andresbonett/"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <IconCodepen />
            Más en CodePen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
