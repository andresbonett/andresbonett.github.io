import Card from "./card";
import { IconCodepen } from "./icons";

const projectsList = [
  {
    url: "https://weather-app-andresbonett.vercel.app/",
    image: "https://i.ibb.co/6RWzqqx/weather-app-andresbonett.png",
    title: "Weather App",
    description: "App del clima con geolocalización",
  },
  {
    url: "https://andresbonett.github.io/huddle-landing-page/",
    image: "https://i.ibb.co/whNTMwT/huddle-landing-page.webp",
    title: "Huddle Landing",
    description: "Landing page responsive",
  },
  {
    url: "https://andresbonett.github.io/fylo-data-storage-component/",
    image: "https://i.ibb.co/xFdN1Dn/Fylo-data-storage.png",
    title: "Fylo Storage",
    description: "Componente de almacenamiento",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Portafolio</p>
        <h2 className="section-title">Proyectos seleccionados</h2>

        <div className="projects-grid">
          {projectsList.map(({ url, image, title, description }) => (
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
