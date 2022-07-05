const Answer = ({ answer, onClick, index }) => {
  return (
    <div
      className="bg-gradient-to-r from-metamaskStart to-metmaskEnd text-white  mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
      onClick={() => onClick(answer, index)}
    >
      <input
        type="radio"
        name="answer"
        value={answer}
        className="ml-5 text-white "
      />
      <label className="text-white  text-lg ml-4">{answer}</label>
    </div>
  );
};

const AnswerCard = ({ answers, onClick }) => {
  return (
    <div className="bg-gray-50 shadow-2xl rounded-2xl min-w-80 w-11/12">
      <div className="pt-6 pb-2">
        {answers.map((answer, i) => (
          <Answer
            key={answer}
            answer={answer.string}
            index={i}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswerCard;
