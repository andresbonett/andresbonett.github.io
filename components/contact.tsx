import { IconGithub, IconLinkedin, IconTelegram } from "./icons";

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/andresbonett/",
    label: "LinkedIn",
    icon: IconLinkedin,
  },
  {
    href: "https://github.com/andresbonett",
    label: "GitHub",
    icon: IconGithub,
  },
  {
    href: "https://t.me/andresbonett",
    label: "Telegram",
    icon: IconTelegram,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-content">
        <p className="section-label">Contacto</p>
        <h2 className="section-title">Trabajemos juntos</h2>
        <p className="contact-text">
          ¿Tienes un proyecto en mente o buscas un desarrollador frontend?
          Escríbeme y conversemos.
        </p>
        <div className="contact-links">
          {contactLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
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
