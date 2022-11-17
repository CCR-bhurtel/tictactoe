import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

function Title() {
  const datactx = useContext(DataContext);
  const data = datactx.data;
  return (
    <div className="w-100">
      <p className=" text-3xl md:text-4xl lg:text-6xl md:font-semibold md:font-bold text-center dark:text-White">
        Round {data.currentRound} of {data.totalRound}
      </p>
    </div>
  );
}

export default Title;
