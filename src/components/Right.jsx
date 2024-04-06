import CoursesBlock from './CoursesBlock';
import Divider from './Divider';
import EducationBlock from './EducationBlock';
import WorkExperienceBlock from './WorkExperienceBlock';

import './Right.css';

const Right = () => {
  return (
    <section className="right">
      <WorkExperienceBlock />
      <Divider />
      <CoursesBlock />
      <Divider />
      <EducationBlock />
    </section>
  );
};

export default Right;
