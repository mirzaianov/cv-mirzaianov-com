import CourseItem from './CourseItem';

import Udemy from '../assets/icons/udemy.svg';
import KevinPowell from '../assets/icons/kevin-powell.svg';

const CoursesList = () => {
  return (
    <ul className="list">
      <CourseItem
        courseName="Modern TypeScript Complete Course"
        courseSrc={Udemy}
        resource="Udemy"
        author="Ivan Petrichenko"
      />
      <CourseItem
        courseName="React - The Complete Guide 2024 (incl. React Router & Redux)"
        courseSrc={Udemy}
        resource="Udemy"
        author="Maximilian Schwarzmüller"
      />
      <CourseItem
        courseName="NEW Figma 2023: Getting started the Beginner to Pro Class"
        courseSrc={Udemy}
        resource="Udemy"
        author="Christine moonlearning"
      />
      <CourseItem
        courseName="JavaScript Algorithms and Data Structures Masterclass"
        courseSrc={Udemy}
        resource="Udemy"
        author="Colt Steele"
      />
      <CourseItem
        courseName="Conquering Responsive Layouts"
        courseSrc={KevinPowell}
        resource="KP"
        author="Kevin Powell"
      />
      <CourseItem
        courseName="The Complete JavaScript Course 2024: From Zero to Expert!"
        courseSrc={Udemy}
        resource="Udemy"
        author="Jonas Schmedtmann"
      />
      <CourseItem
        courseName="WEB Developer"
        courseSrc={Udemy}
        resource="Udemy"
        author="Ivan Petrichenko"
      />
    </ul>
  );
};

export default CoursesList;
