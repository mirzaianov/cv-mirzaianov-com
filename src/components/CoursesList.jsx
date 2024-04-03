import Course from './Course';

const CoursesList = () => {
  return (
    <ul className="list">
      <Course
        courseName="Modern TypeScript Complete Course"
        resource="Udemy"
        author="Ivan Petrichenko"
        href="https://www.udemy.com/course/modern_typescript/"
      />
      <Course
        courseName="React - The Complete Guide 2024 (incl. React Router & Redux)"
        resource="Udemy"
        author="Maximilian Schwarzmüller"
        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
      />
      <Course
        courseName="NEW Figma 2023: Getting started the Beginner to Pro Class"
        resource="Udemy"
        author="Christine moonlearning"
        href="https://www.udemy.com/course/figma-beginner/"
      />
      <Course
        courseName="JavaScript Algorithms and Data Structures Masterclass"
        resource="Udemy"
        author="Colt Steele"
        href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
      />
      <Course
        courseName="The Complete JavaScript Course 2024: From Zero to Expert!"
        resource="Udemy"
        author="Jonas Schmedtmann"
        href="https://www.udemy.com/course/the-complete-javascript-course/"
      />
      <Course
        courseName="CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)"
        resource="Udemy"
        author="Maximilian Schwarzmüller"
        href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/"
      />
      <Course
        courseName="WEB Developer"
        resource="Udemy"
        author="Ivan Petrichenko"
        href="https://www.udemy.com/course/webdeveloper/"
      />
    </ul>
  );
};

export default CoursesList;
