import './InfoItem.css';

const InfoItem = ({ src, alt, name, href, path }) => {
  return (
    <div className="info-item">
      <div className="info-item__description">
        <img
          src={src}
          alt={alt}
        />
        <p>{name}</p>
      </div>
      <p>⇒</p>
      <a
        href={href}
        target="_blank"
      >
        {path}
      </a>
    </div>
  );
};

export default InfoItem;
