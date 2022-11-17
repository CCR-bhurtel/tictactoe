import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

function ResetVotes() {
  const datactx = useContext(DataContext);
  const voteCount = datactx.data.voteCount;

  return (
    <div className="w-100 bg-Casal text-White p-2 md:px-6 flex items-center justify-center mt-3 flex-col ">
      <p className="text-[1.2rem] md:text-[1.4rem] font-medium">Reset Votes</p>
      <p className="text-[1.1rem] font-light md:text-[1.3rem] tracking-wider md:mt-1 ">
        this game: &nbsp; &nbsp; &nbsp; &nbsp; {voteCount.thisgame}
      </p>
      <p className="text-[1.1rem] md:text-[1.3rem] font-light tracking-wider">
        this round: &nbsp; &nbsp; &nbsp; &nbsp; {voteCount.thisround}
      </p>
    </div>
  );
}

export default ResetVotes;
