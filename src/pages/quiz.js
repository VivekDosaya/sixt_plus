import Header from "components/Header";
import AnswerCard from "components/AnswerCard";
import Status from "components/Status";
import EndQuiz from "components/EndQuiz";
import { useState } from "react";

const Quiz = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);
  const [statusShown, setStatusShown] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);
  const [answers, setAnswers] = useState(questions[questionNumber].answers);
  const numberOfQuestions = questions.length;

  const handleClick = (answer, index) => {
    if (questions[questionNumber].answers[index].isCorrect) {
      setNumCorrect(numCorrect + 1);
      setCurrentQuestionCorrect(true);
    } else {
      setCurrentQuestionCorrect(false);
    }
    setStatusShown(true);
  };
  return (
    <div className="z-10 w-screen flex flex-col justify-start items-start">
      <Header title={questions[questionNumber].question} />
      {!statusShown && (
        <div className="flex justify-center mt-3 w-full">
          <AnswerCard answers={answers} onClick={handleClick} />
        </div>
      )}
      {statusShown && (
        <div className="ml-4">
          <Status correct={currentQuestionCorrect} />
          <div>
            Correct Answer:
            {questions[questionNumber].answers.find((a) => a.isCorrect).string}
          </div>
          <div
            className="flex flex-row justify-center items-center border border-black my-6 py-3 cursor-pointer w-auto bg-brandRed text-white "
            id="connectWalletButtonMetamask"
            onClick={() => {
              if (questionNumber + 1 <= numberOfQuestions) {
                setQuestionNumber(questionNumber + 1);
                setCurrentQuestionCorrect(false);
                setAnswers(questions[questionNumber].answers);
              }
              setStatusShown(false);
            }}
          >
            <p className="font-bold text-xl">Next question</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
