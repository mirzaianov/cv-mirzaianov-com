const CourseItem = ({ courseName, courseSrc, resource, author }) => {
  return (
    <div className="list-0">
      <div className="p-700">{courseName}</div>
      <div className="course-item__info">
        <img
          src={courseSrc}
          alt={resource}
        />
        <p>|</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default CourseItem;
