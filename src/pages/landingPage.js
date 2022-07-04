import Header from "components/Header";
import SubjectCard from "components/SubjectCard";
import geoIcon from "assets/images/geography.svg";
import { useDappContext } from "provider/userStateProvider";
import { useQueryHook } from "hooks/useQueryHooks";
import Loader from "components/loader";
import { LoaderHeight } from "enums/loaderHeight";
import { allDocuments } from "firebase-setup/queries";
import Quiz from "pages/Quiz";

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
    questions,
    setQuestions,
  } = useDappContext();
  let cms = [];
  const { isLoading, isError, data } = useQueryHook("cms", allDocuments("cms"));
  if (isLoading) {
    return <Loader height={LoaderHeight.FULL_SCREEN} />;
  }

  data.forEach((doc) => cms.push(doc.data()));
  cms = cms[0].questions;

  const onClick = () => {};
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

      <div className="flex flex-col justify-center items-center w-full h-full z-10">
        <Header title={"SIXT+ QUIZ"} />
        <SubjectCard
          imgSrc={geoIcon}
          imgAlt="An illustration of a globe"
          subject="Geography"
          onClick={onClick}
        />
        {/* <Quiz /> */}
      </div>
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
