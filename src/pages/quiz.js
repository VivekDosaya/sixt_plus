import Header from "components/Header";
import AnswerCard from "components/AnswerCard";
import Status from "components/Status";
import EndQuiz from "components/EndQuiz";
import { useState } from "react";

const Quiz = ({ questions, startQuiz }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);
  const [statusShown, setStatusShown] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);
  const [answers, setAnswers] = useState(questions[questionNumber].answers);
  const [showEndQuiz, setShowEndQuiz] = useState(false);
  const numberOfQuestions = questions.length - 1;
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
      {!showEndQuiz && <Header title={questions[questionNumber].question} />}
      {!statusShown && !showEndQuiz && (
        <div className="flex justify-center mt-3 w-full">
          <AnswerCard answers={answers} onClick={handleClick} />
        </div>
      )}
      {statusShown && !showEndQuiz && (
        <div className="flex flex-col justify-center items-center w-full">
          <Status correct={currentQuestionCorrect} />
          <h2 className="text-md text-white mt-2 font-bold text-left">
            Correct Answer:{" "}
            {questions[questionNumber].answers.find((a) => a.isCorrect).string}
          </h2>
          <div
            className="flex flex-row justify-center items-center border bg-gradient-to-r from-metamaskStart to-metmaskEnd my-6 px-4 py-3 cursor-pointer w-auto bg-brandRed text-white "
            id="connectWalletButtonMetamask"
            onClick={() => {
              if (questionNumber + 1 <= numberOfQuestions) {
                setQuestionNumber(questionNumber + 1);
                setCurrentQuestionCorrect(false);
                setAnswers(questions[questionNumber].answers);
              } else {
                setShowEndQuiz(true);
              }
              setStatusShown(false);
            }}
          >
            <p className="font-bold text-xl">Next question</p>
          </div>
        </div>
      )}
      {showEndQuiz && startQuiz && (
        <EndQuiz
          numCorrect={numCorrect}
          numberOfQuestions={numberOfQuestions + 1}
        />
      )}
    </div>
  );
};
export default Quiz;
