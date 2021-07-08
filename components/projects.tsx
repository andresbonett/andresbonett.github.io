import Card from "./card";

const projectsList = [
  {
    url: "https://weather-app-andresbonett.vercel.app/",
    image: "https://i.ibb.co/6RWzqqx/weather-app-andresbonett.png",
    title: "Weather-app",
  },
  {
    url: "https://andresbonett.github.io/huddle-landing-page/",
    image: "https://i.ibb.co/whNTMwT/huddle-landing-page.webp",
    title: "huddle-landing-page",
  },
  {
    url: "https://andresbonett.github.io/fylo-data-storage-component/",
    image: "https://i.ibb.co/xFdN1Dn/Fylo-data-storage.png",
    title: "Fylo-data-storage",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div className="projects-grid">
        {projectsList.map(({ url, image, title }) => (
          <Card key={url} url={url} image={image} title={title} />
        ))}
      </div>

      <a
        href="https://codepen.io/andresbonett/"
        className="btn btn-show-all"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-codepen"></i> CodePen
        <i className="fas fa-chevron-right"></i>
      </a>
      {/* <a
        href="https://codepen.io/andresbonett/"
        className="btn btn-show-all"
        target="_blank"
      >
        GitHub<i className="fas fa-chevron-right"></i>
      </a> */}
    </section>
  );
};

export default Projects;
