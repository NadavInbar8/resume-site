import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx, display }) => {
  return (
    <span className={display}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
