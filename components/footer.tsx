import { displayName } from "../lib/cv";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          &copy; {year} {displayName}
        </p>
        <p className="footer-text">Hecho con Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
