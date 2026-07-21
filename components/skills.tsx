import { skillGroups } from "../lib/cv";

const Skills = () => {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <p className="section-label">Tecnologías</p>
        <h2 className="section-title">Stack y herramientas</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.id} className="skills-group">
              <h3 className="skills-group-title">{group.label}</h3>
              <ul className="skills-grid">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
