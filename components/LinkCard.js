const LinkCard = ({ link }) => {
  const { title, desc, url } = link.fields;
  return (
    <div className="link">
      <a href={url} target="_blank">
        <div className="link-content">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default LinkCard;
