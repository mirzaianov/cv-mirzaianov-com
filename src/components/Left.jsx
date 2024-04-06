import InfoBlock from './InfoBlock';
import ContactsBlock from './ContactsBlock';
import AboutBlock from './AboutBlock';
import SkillsBlock from './SkillsBlock';
import LanguagesBlock from './LanguagesBlock';
import Divider from './Divider';

import './Left.css';

const Left = () => {
  return (
    <section className="left">
      <InfoBlock />
      <Divider />
      <ContactsBlock />
      <Divider />
      <AboutBlock />
      <Divider />
      <SkillsBlock />
      <Divider />
      <LanguagesBlock />
    </section>
  );
};

export default Left;
