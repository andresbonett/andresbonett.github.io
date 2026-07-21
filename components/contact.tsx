import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconTelegram,
} from "./icons";
import {
  cv,
  email,
  githubUrl,
  linkedinUrl,
  telegramUrl,
} from "../lib/cv";

const contactLinks = [
  {
    href: `mailto:${email}`,
    label: "Email",
    icon: IconEmail,
    external: false,
  },
  {
    href: linkedinUrl,
    label: "LinkedIn",
    icon: IconLinkedin,
    external: true,
  },
  {
    href: githubUrl,
    label: "GitHub",
    icon: IconGithub,
    external: true,
  },
  {
    href: telegramUrl,
    label: "Telegram",
    icon: IconTelegram,
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact reveal">
      <div className="container contact-content">
        <p className="section-label">Contacto</p>
        <h2 className="section-title">Trabajemos juntos</h2>
        <p className="contact-text">
          ¿Tienes un proyecto en mente o buscas un desarrollador frontend?
          Escríbeme y conversemos. Disponible: {cv.basics.availability}.
        </p>
        <p className="contact-meta">{cv.basics.location}</p>
        <div className="contact-links">
          {contactLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={href}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="contact-link"
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
