const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Desarrollador Frontend · Autodidacta</p>
        <h1 className="hero-title">Andrés Bonett</h1>
        <p className="hero-subtitle">
          Construyo interfaces web y móviles con atención al detalle. Cinco años
          de experiencia creando productos digitales con React, TypeScript y el
          ecosistema moderno de frontend.
        </p>
        <div className="hero-meta">
          <span className="hero-tag">5 años de experiencia</span>
          <span className="hero-tag">Remoto</span>
          <span className="hero-tag">Disponible para proyectos</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
