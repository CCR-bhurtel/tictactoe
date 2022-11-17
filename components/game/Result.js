import React from "react";

function Result({ round, result }) {
  return (
    <div className="flex items-center justify-center flex-col bg w-full h-[120px]  bg-Casal mt-4 md:px-4 lg:w-[250px] lg:mt-12">
      <p className="font-semibold text-2xl text-Iron lg:mt-2">Round {round}</p>
      <p className="italic font-thin mt-2 text-Iron">{result}</p>
    </div>
  );
}

export default Result;
