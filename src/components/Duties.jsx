import List from './List';

const Duties = ({ title, duties }) => {
  return (
    <div className="list">
      <div className="p-700">{title}</div>
      <List items={duties} />
    </div>
  );
};

export default Duties;
