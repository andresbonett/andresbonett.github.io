const skills = [
  "React",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Tauri",
  "Next.js",
  "Drupal Themes",
  "JavaScript",
  "HTML & CSS",
  "Git",
  "REST APIs",
  "Responsive Design",
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Tecnologías</p>
        <h2 className="section-title">Stack y herramientas</h2>
        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
