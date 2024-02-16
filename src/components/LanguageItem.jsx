import './LanguageItem.css';

const LanguageItem = ({ language, level }) => {
  return (
    <div className="language-item">
      <div className="language-item__description">
        <p>•</p>
        <p className="p-400-up">{language}</p>
      </div>
      <p>-</p>
      <p>{level}</p>
    </div>
  );
};

export default LanguageItem;
