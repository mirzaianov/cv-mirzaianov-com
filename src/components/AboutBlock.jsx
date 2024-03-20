import List from './List';

const summaryArray = [
  `Higher technical education (GPA 4.2), advanced English (C1), vast experience of working in an international cross-functional team`,
  `I've been coding for 1.5 years, after switching the career from Mechanical Design Engineering`,
  `Started with HTML, CSS & JavaScript and later found joy in building React-based apps`,
  `I am solid in Algorithms, have skills in Figma`,
  `I'm eager to create eye-catching interfaces with cutting-edge web technologies`,
  `I am focused on blending aesthetics and functionality, driven by a keen eye for detail`,
  `My aim for the nearest future is to continuously evolve in the dynamic realm of modern Frontend Development`,
];

const AboutBlock = () => {
  return (
    <div className="block">
      <h2 className="h2-700-up">About</h2>
      <List items={summaryArray} />
    </div>
  );
};

export default AboutBlock;
