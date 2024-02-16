import Courses from './Courses';
import Divider from './Divider';
import Education from './Education';
import Experience from './Experience';

import './Right.css';

const Right = () => {
  return (
    <div className="right">
      <Experience />
      <Divider />
      <Courses />
      <Divider />
      <Education />
    </div>
  );
};

export default Right;
