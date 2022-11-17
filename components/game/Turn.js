/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

function Turn({}) {
  const dataCtx = useContext(DataContext);
  const turn = dataCtx.data.turn;
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <h2 className="font-semibold dark:text-White text-[1.2rem] flex flex-row items-center justify-center mt-1">
      Player {turn}’s turn: &nbsp;{" "}
      <span className="text-2xl">
        <p>{turn === 1 ? "O" : "x"}</p>
      </span>
    </h2>
  );
}

export default Turn;
