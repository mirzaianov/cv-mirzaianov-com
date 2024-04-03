const Course = ({ courseName, resource, author, href }) => {
  return (
    <li className="list-0">
      <a
        href={href}
        target="_blank"
      >
        <div className="p-700 course__name">{courseName}</div>
      </a>
      <div className="course__info">
        <p>{resource}</p>
        <p>|</p>
        <p>{author}</p>
      </div>
    </li>
  );
};

export default Course;
