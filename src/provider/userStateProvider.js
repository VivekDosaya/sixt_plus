import DappContext from "./context";
import { useState, useContext } from "react";
import { allDocuments } from "firebase-setup/queries";
import { useEffect } from "react";

const DappProvider = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [statusShown, setStatusShown] = useState(false);
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const unsubscribe = () => {
      let cmsData = [];
      allDocuments("cms").then((docs) => {
        docs.forEach((doc) => {
          cmsData.push(doc.data());
        });
      });
      setQuestions(cmsData[0].questions);
    };
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <DappContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        numCorrect,
        setNumCorrect,
        statusShown,
        setStatusShown,
        currentQuestionCorrect,
        setCurrentQuestionCorrect,
      }}
    >
      {children}
    </DappContext.Provider>
  );
};
const useDappContext = () => {
  const context = useContext(DappContext);
  if (context === undefined) {
    throw new Error("Encountered error!");
  }
  return context;
};

export { DappProvider, useDappContext };
