function Progress({ points, answer, numQuestions, index, maxPointes }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPointes}
      </p>
    </header>
  );
}

export default Progress;
