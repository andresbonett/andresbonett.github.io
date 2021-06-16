import Image from "next/image";

const Card = ({ url, image, title }) => {
  return (
    <a href={url} target="_blank" className="project project-tile">
      <img className="project-image" src={image} alt={title} />
      <p className="project-title">
        <span className="code">&lt;</span>
        {title}
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
  );
};

export default Card;
