import './InfoBlock.css';

const InfoBlock = () => {
  return (
    <article className="info">
      <h1 className="h1-700-up">
        Riaz
        <br />
        Mirzaianov
      </h1>
      <div className="info__description">
        <h2 className="h2-400-up">Frontend Developer</h2>
        <h3 className="h3-400">JavaScript • React • TypeScript</h3>
      </div>
    </article>
  );
};

export default InfoBlock;
