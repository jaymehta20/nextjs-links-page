import Image from "next/image";

const LinkCard = ({ link }) => {
  const { title, desc, url } = link.fields;
  return (
    <div className="link">
      <a href={url} target="_blank">
        <div className="right">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default LinkCard;
