import Image from "next/image";

const Card = ({ url, image, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project project-tile"
    >
      <Image
        className="project-image"
        src={image}
        alt={title}
        width={274}
        height={274}
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        {title}
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
  );
};

export default Card;
