import Job from './Job.jsx';

import Freelance from '../assets/icons/freelance.svg';
import Knorr from '../assets/icons/knorr.svg';

const freelanceResponsibilities = [
  'Designed visually appealing interfaces in Figma based on client requirements',
  'Developed simple UI and intuitive interactions using HTML, CSS, JavaScript, ES6',
  'Built dynamic SPA’s using React, Tailwind and Firebase',
  'Formed cross-browser, responsive and adaptive layouts',
  'Effectively communicated with customers, analyzed project requirements, provided updates in time, and incorporated feedbacks during the development stages',
];

const freelanceAchievements = [
  'Completed 10+ pet and commercial projects from scratch to deployment',
  'Refactored 1 project from JS to React using hooks, react-router, react-hook-form, lazy-loading and reduced the page loading time by 55%',
  'Increased the customer satisfaction rate up to 4.7 / 5',
];

const knorrResponsibilities = [
  'Supported localization projects of CVS Air Disc Brake (ADB) parts',
  'Designed non-standard equipment',
  'Negotiated with customers as well as with suppliers',
  'Mentored junior engineers',
  'Hosted teleconferences & offline meetings with team members (CoCs)',
  'Participated in global ADB Workshops in Munich, Germany',
];

const knorrAchievements = [
  'Completed 3 localization projects of car components',
  'Implemented 100+ toolings into shops and laboratories',
  'Designed 700+ component, assembly, installation drawings',
];

const Experience = () => {
  return (
    <div className="block">
      <h2 className="h2-700-up">Experience</h2>
      <Job
        jobTitle="Frontend Developer (JS, React, TS)"
        iconSrc={Freelance}
        company="Freelance"
        date="Oct 2023 - Present"
        responsibilities={freelanceResponsibilities}
        achievements={freelanceAchievements}
      />
      <Job
        jobTitle="Senior R&D Engineer"
        iconSrc={Knorr}
        company="Knorr-Bremse AG"
        date="Apr 2017 - Sep 2022"
        responsibilities={knorrResponsibilities}
        achievements={knorrAchievements}
      />
    </div>
  );
};

export default Experience;
