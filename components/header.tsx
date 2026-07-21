"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const homeAnchors = [
  { href: "/#about", label: "Sobre mí" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#contact", label: "Contacto" },
];

const Header = () => {
  const pathname = usePathname();
  const onExperience = pathname?.startsWith("/experiencia");

  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          href="/"
          className="logo"
          aria-label="Inicio"
          transitionTypes={["page-back"]}
        >
          AB
        </Link>
        <div className="header-actions">
          <nav aria-label="Navegación principal">
            <ul className="nav-list">
              {homeAnchors.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/experiencia/"
                  className={`nav-link${onExperience ? " nav-link-active" : ""}`}
                  transitionTypes={["page-forward"]}
                >
                  Experiencia
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
