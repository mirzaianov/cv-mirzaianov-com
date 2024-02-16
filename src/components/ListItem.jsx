const ListItem = ({ text }) => {
  return (
    <div className="list-item">
      <p>•</p>
      <p>{text}</p>
    </div>
  );
};

export default ListItem;
