import Duties from './Duties.jsx';

const Job = ({
  jobTitle,
  iconSrc,
  company,
  date,
  responsibilities,
  achievements,
}) => {
  return (
    <div className="list">
      <div className="list">
        <div className="h3-700">{jobTitle}</div>
        <div className="job__info">
          <img
            src={iconSrc}
            alt={company}
          />
          <div className="h3-700">{company}</div>
          <div className="h3-400">|</div>
          <div className="h3-400">{date}</div>
        </div>
      </div>
      <Duties
        title="Main Responsibilities:"
        duties={responsibilities}
      />
      <Duties
        title="Key Achievements:"
        duties={achievements}
      />
    </div>
  );
};

export default Job;
