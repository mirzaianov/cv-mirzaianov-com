import LanguageItem from './LanguageItem';

const LanguagesList = () => {
  return (
    <div className="list-0">
      <LanguageItem
        language={'English'}
        level={'Advanced ( C1 / IELTS 7.5 )'}
      />
      <LanguageItem
        language={'Turkish'}
        level={'Beginner ( A2 )'}
      />
      <LanguageItem
        language={'Russian'}
        level={'Native'}
      />
      <LanguageItem
        language={'Tatar'}
        level={'Native'}
      />
    </div>
  );
};

export default LanguagesList;
