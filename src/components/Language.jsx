import './Language.css';

const Language = ({ language, level }) => {
  return (
    <div className="language">
      <div className="language__description">
        <p>•</p>
        <p className="p-400-up">{language}</p>
      </div>
      <p>-</p>
      <p>{level}</p>
    </div>
  );
};

export default Language;
