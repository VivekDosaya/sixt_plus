import { ThreeDots } from "react-loader-spinner";
import { LoaderHeight } from "enums/loaderHeight";

const Loader = (height = LoaderHeight.FULL_SCREEN) => {
  switch (height) {
    case LoaderHeight.FULL_SCREEN:
      return (
        <div
          className={`h-screen w-screen flex flex-col justify-center items-center`}
        >
          <ThreeDots color="#092D63" height={120} width={120} />
        </div>
      );
    case LoaderHeight.HALF_SCREEN:
      return (
        <div
          className={`h-1/2 w-screen flex flex-col justify-center items-center`}
        >
          <ThreeDots color="#092D63" height={120} width={120} />
        </div>
      );
    case LoaderHeight.QUARTER_SCREEN:
      return (
        <div
          className={`h-1/4 w-screen flex flex-col justify-center items-center`}
        >
          <ThreeDots color="#092D63" height={120} width={120} />
        </div>
      );
    default:
      return (
        <div
          className={`h-screen w-screen flex flex-col justify-center items-center`}
        >
          <ThreeDots color="#092D63" height={120} width={120} />
        </div>
      );
  }
};
export default Loader;
