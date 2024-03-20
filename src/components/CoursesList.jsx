import Course from './Course';

const CoursesList = () => {
  return (
    <ul className="list">
      <Course
        courseName="Modern TypeScript Complete Course"
        resource="Udemy"
        author="Ivan Petrichenko"
      />
      <Course
        courseName="React - The Complete Guide 2024 (incl. React Router & Redux)"
        resource="Udemy"
        author="Maximilian Schwarzmüller"
      />
      <Course
        courseName="NEW Figma 2023: Getting started the Beginner to Pro Class"
        resource="Udemy"
        author="Christine moonlearning"
      />
      <Course
        courseName="JavaScript Algorithms and Data Structures Masterclass"
        resource="Udemy"
        author="Colt Steele"
      />
      <Course
        courseName="The Complete JavaScript Course 2024: From Zero to Expert!"
        resource="Udemy"
        author="Jonas Schmedtmann"
      />
      <Course
        courseName="CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)"
        resource="Udemy"
        author="Maximilian Schwarzmüller"
      />
      <Course
        courseName="WEB Developer"
        resource="Udemy"
        author="Ivan Petrichenko"
      />
    </ul>
  );
};

export default CoursesList;
