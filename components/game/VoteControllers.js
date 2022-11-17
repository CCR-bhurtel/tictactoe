import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

function VoteControllers() {
  const datactx = useContext(DataContext);
  const turn = datactx.data.turn;

  const votedforround = datactx.data.resetVotes["player" + turn].thisround;
  const votedforgame = datactx.data.resetVotes["player" + turn].thisgame;

  const activeClass =
    "bg-Casal px-4 py-2 text-[1.2rem] rounded-lg font-thin text-white text-center cursor-pointer mx-2";
  const undoClass =
    "bg-Hoki px-4 py-2 text-[1.2rem] rounded-lg font-thin text-Iron  text-center cursor-pointer mx-2";
  return (
    <div className="flex items-center flex-wrap justify-center mt-3 flex-row lg:justify-between lg:min-w-full ">
      <div
        onClick={() => {
          if (!votedforgame) {
            datactx.vote("thisgame");
          } else {
            datactx.unvote("thisgame");
          }
        }}
        className={votedforgame ? undoClass : activeClass}
      >
        {votedforgame ? "Undo vote" : "Reset game"}
      </div>
      <div
        onClick={() => {
          if (!votedforround) {
            datactx.vote("thisround");
          } else {
            datactx.unvote("thisround");
          }
        }}
        className={votedforround ? undoClass : activeClass}
      >
        {votedforround ? "Undo vote" : "Reset round"}
      </div>
    </div>
  );
}

export default VoteControllers;
