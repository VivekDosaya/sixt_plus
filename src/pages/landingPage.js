import { useQueryHook } from "hooks/useQueryHooks";
import Loader from "components/loader";
import { LoaderHeight } from "enums/loaderHeight";
import { allDocuments } from "firebase-setup/queries";
import { useState } from "react";
import Quiz from "pages/quiz";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useDappContext } from "provider/userStateProvider";

const LandingPage = () => {
  let cms = [];
  const { setUserEmail } = useDappContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { isLoading, data } = useQueryHook("cms", allDocuments("cms"));
  const [startQuiz, setStartQuiz] = useState(false);
  if (isLoading) {
    return <Loader height={LoaderHeight.FULL_SCREEN} />;
  }
  data.forEach((doc) => cms.push(doc.data()));
  cms = cms[0].questions;
  const onSubmit = (data) => {
    setUserEmail(data.email);
    setStartQuiz(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center relative">
      {startQuiz && (
        <div
          className="bg-white shadow-sm selection:text-xl bg-gradient-to-r from-metamaskStart to-metmaskEnd  h-auto w-auto p-2 rounded-full hover:shadow-xl z-30 cursor-pointer flex justify-center items-center absolute top-1 left-1"
          onClick={() => {
            setStartQuiz(false);
          }}
        >
          <BsFillArrowLeftCircleFill size={"32px"} color={"#ffffff"} />
        </div>
      )}
      <video
        autoPlay
        muted
        loop
        type="video/mp4"
        playsInline
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-dark.mp4?v=364d6351-2cdd-8622-b962-d429a098997"
      />
      {!startQuiz && (
        <div className="flex flex-col justify-center items-center w-screen h-full z-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-start items-center bg-white shadow-sm selection:text-xl rounded-2xl h-80 w-80 p-8 z-10  "
          >
            <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-metamaskStart to-metmaskEnd">
              {"SIXT+ QUIZ"}
            </h1>
            <input
              placeholder="Sixt email"
              className="justify-center px-4 py-2 text-md border-2 border-metamaskStart mt-16  focus:border-metmaskEnd font-medium rounded-md  w-full"
              {...register("email", {
                pattern: /[a-z0-9._%+-]+@*sixt.[a-z]{2,4}$/,
                required: "Email Address is required",
              })}
            />
            {errors.email && (
              <span className="font-semibold text-xs text-gray-700 text-left mt-2 w-full">
                Only sixt emails allowed
              </span>
            )}
            <button
              className="h-12 w-44 border-2 text-white font-semibold bg-metamaskStart border-metamaskEnd mt-6 uppercase"
              type="submit"
            >
              Start Quiz
            </button>
          </form>
        </div>
      )}
      {startQuiz && <Quiz questions={cms} startQuiz={startQuiz} />}
    </div>
  );
};

export default LandingPage;
