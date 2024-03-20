import './Contact.css';

const InfoItem = ({ name, href, path }) => {
  return (
    <div className="contact-item">
      <div className="contact-item__description">
        <p>{name}</p>
      </div>
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
