/* eslint-disable @next/next/no-img-element */
import { IconArrow } from "./icons";

type CardProps = {
  url: string;
  image: string;
  title: string;
  description?: string;
};

const Card = ({ url, image, title, description }: CardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-image-wrapper">
        <img className="project-image" src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        {description && <p className="project-link-text">{description}</p>}
        <span className="project-link-text">
          Ver proyecto <IconArrow />
        </span>
      </div>
    </a>
  );
};

export default Card;
