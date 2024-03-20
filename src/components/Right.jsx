import CoursesBlock from './CoursesBlock';
import Divider from './Divider';
import EducationBlock from './EducationBlock';
import WorkExperienceBlock from './WorkExperienceBlock';

import './Right.css';

const Right = () => {
  return (
    <div className="right">
      <WorkExperienceBlock />
      <Divider />
      <CoursesBlock />
      <Divider />
      <EducationBlock />
    </div>
  );
};

export default Right;
