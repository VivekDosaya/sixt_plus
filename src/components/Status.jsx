const Status = ({ correct }) => {
  if (correct) {
    return (
      <h2 className="text-xl text-green-500 mt-12 font-bold text-left">
        Correct!
      </h2>
    );
  }

  return (
    <h2 className={`text-xl text-red-500 mt-12 font-bold text-left`}>Wrong!</h2>
  );
};

export default Status;
