import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import Result from "./Result";

function Results() {
  const datactx = useContext(DataContext);
  const results = datactx.data.results;
  return (
    <div className="mt-2 pb-4 flex items-center justify-center flex-col md:ml-[1.5rem]  md:pb-0 md:justify-between ">
      {results.map((item) => (
        <Result key={item.round} round={item.round} result={item.result} />
      ))}
    </div>
  );
}

export default Results;
