import { setNewDocument, updateDocumentData } from "firebase-setup/queries";
import { useDappContext } from "provider/userStateProvider";
import { useEffect } from "react";
const EndQuiz = ({ numCorrect, numberOfQuestions }) => {
  const { userEmail } = useDappContext();
  const percentCorrect = parseFloat(
    (100 * numCorrect) / numberOfQuestions
  ).toPrecision(2);
  let header = (
    <h1 className="text-3xl font-bold  text-center text-transparent mx-4 bg-clip-text bg-gradient-to-r from-metamaskStart to-metmaskEnd">
      <span>You got {`${numCorrect}/${numberOfQuestions} correct `}</span>
      <span>Head to the Sixt+ booth to claim your reward!</span>
    </h1>
  );
  useEffect(() => {
    setNewDocument("results", userEmail, {
      score: numCorrect,
      numberOfQuestions: numberOfQuestions,
    });
  }, []);

  return <div className="flex justify-center items-center ">{header}</div>;
};

export default EndQuiz;
