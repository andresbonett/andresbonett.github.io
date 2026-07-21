import { experience, leadership } from "../lib/cv";

type ExperienceProps = {
  compact?: boolean;
};

const Experience = ({ compact = false }: ExperienceProps) => {
  const items = compact ? experience.slice(0, 1) : experience;

  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <p className="section-label">Trayectoria</p>
        <h2 className="section-title">Experiencia profesional</h2>

        <ol className="experience-list">
          {items.map((job) => (
            <li key={`${job.company}-${job.start}`} className="experience-item">
              <div className="experience-meta">
                <span className="experience-dates">
                  {job.start} — {job.end}
                </span>
                <span className="experience-duration">{job.durationLabel}</span>
              </div>
              <h3 className="experience-role">{job.title}</h3>
              <p className="experience-company">
                {job.company} · {job.location}
              </p>
              <p className="experience-summary">{job.summary}</p>
              {job.technicalLeadership.length > 0 && (
                <ul className="experience-points">
                  {job.technicalLeadership.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {job.technologies.length > 0 && (
                <ul className="tech-tags">
                  {job.technologies.map((tech) => (
                    <li key={tech} className="tech-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        {!compact && leadership.length > 0 && (
          <div className="leadership-block">
            <h3 className="skills-group-title">Liderazgo y colaboración</h3>
            <ul className="experience-points">
              {leadership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
