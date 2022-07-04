import Header from "components/Header";
import { useDappContext } from "provider/userStateProvider";
import { useQueryHook } from "hooks/useQueryHooks";
import Loader from "components/loader";
import { LoaderHeight } from "enums/loaderHeight";
import { allDocuments } from "firebase-setup/queries";
import { useState } from "react";
import Quiz from "pages/quiz";

const LandingPage = () => {
  const {
    questionNumber,
    setQuestionNumber,
    numCorrect,
    setNumCorrect,
    statusShown,
    setStatusShown,
    currentQuestionCorrect,
    setCurrentQuestionCorrect,
  } = useDappContext();
  let cms = [];
  const { isLoading, isError, data } = useQueryHook("cms", allDocuments("cms"));
  const [startQuiz, setStartQuiz] = useState(false);
  if (isLoading) {
    return <Loader height={LoaderHeight.FULL_SCREEN} />;
  }
  data.forEach((doc) => cms.push(doc.data()));
  cms = cms[0].questions;

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center relative">
      <video
        autoPlay
        muted
        loop
        type="video/mp4"
        playsInline
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4?v=364d6351-2cdd-8622-b962-d429a0989974"
      />
      {!startQuiz && (
        <div className="flex flex-col justify-center items-center w-full h-full z-10">
          <Header title={"SIXT+ QUIZ"} />
          <div
            className="bg-white shadow-xl text-xl rounded-2xl h-80 w-72 m-10 hover:shadow-xl  z-10 cursor-pointer  flex justify-center items-center"
            onClick={() => {
              setStartQuiz(true);
            }}
          >
            Start Quiz
          </div>
        </div>
      )}
      {startQuiz && (
        <Quiz
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          numCorrect={numCorrect}
          setNumCorrect={setNumCorrect}
          statusShown={statusShown}
          setStatusShown={setStatusShown}
          currentQuestionCorrect={currentQuestionCorrect}
          setCurrentQuestionCorrect={setCurrentQuestionCorrect}
          questions={cms}
        />
      )}
    </div>
  );
};

export default LandingPage;

//helper
// const onClick = () => {
// setNewDocument("cms", "questions", {
//   questions: [
//     {
//       question: "Lorem Ipsum",
//       answers: [
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "true",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//       ],
//     },
//     {
//       question: "Lorem Ipsum",
//       answers: [
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "true",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//       ],
//     },
//     {
//       question: "Lorem Ipsum",
//       answers: [
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "true",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//       ],
//     },
//     {
//       question: "Lorem Ipsum",
//       answers: [
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "true",
//         },
//         {
//           string: "Hey there",
//           isCorrect: "false",
//         },
//       ],
//     },
//   ],
// });
//   };
