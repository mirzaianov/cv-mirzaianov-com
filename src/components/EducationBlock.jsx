import './EducationBlock.css';

const EducationBlock = () => {
  return (
    <article className="block">
      <h2 className="h2-700-up">Education</h2>
      <div className="list">
        <div className="education__heading">
          <div className="h3-700">Master’s Degree</div>
          <div className="h3-400">|</div>
          <div className="h3-400">Engineering Technology</div>
          <div className="h3-400">|</div>
          <div className="h3-400">GPA 4.2</div>
        </div>
        <div className="education__type">
          <p className="p-700">Higher Education</p>
          <p>|</p>
          <p>Full-time</p>
        </div>
        <p>
          Kazan National Research Technical University named after A.N.
          Tupolev–KAI
        </p>
      </div>
    </article>
  );
};

export default EducationBlock;
