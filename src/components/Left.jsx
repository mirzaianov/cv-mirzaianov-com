import Hero from './Hero';
import Info from './Info';
import Summary from './Summary';
import SkillsList from './SkillsList';
import Languages from './Languages';
import Divider from './Divider';

import './Left.css';

const Left = () => {
  return (
    <div className="left">
      <Hero />
      <Divider />
      <Info />
      <Divider />
      <Summary />
      <Divider />
      <SkillsList />
      <Divider />
      <Languages />
    </div>
  );
};

export default Left;
