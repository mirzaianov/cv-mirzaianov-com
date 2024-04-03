const Course = ({ courseName, resource, author }) => {
  return (
    <li className="list-0">
      <div className="p-700 course__name">{courseName}</div>
      <div className="course__info">
        <p>{resource}</p>
        <p>|</p>
        <p>{author}</p>
      </div>
    </li>
  );
};

export default Course;
