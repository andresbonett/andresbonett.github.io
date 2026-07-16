const navItems = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Inicio">
          AB
        </a>
        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
