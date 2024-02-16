import List from './List';

const summaryArray = [
  'I’ve been coding for 1.5 years, after switching the career from Mechanical Design Engineering',
  'I started with HTML, CSS & JavaScript and I have really found joy in building React-based applications',
  'As a Frontend Developer, I’m passionate about creating eye-catching interfaces with cutting-edge web technologies',
  'I meticulously blend aesthetics and functionality, driven by a keen eye for detail',
  'My aim is to continuously evolve in the dynamic realm of frontend development',
];

const Summary = () => {
  return (
    <div className="block">
      <h2 className="h2-700-up">Summary</h2>
      <List items={summaryArray} />
    </div>
  );
};

export default Summary;
