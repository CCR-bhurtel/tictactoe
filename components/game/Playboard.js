import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import Cell from "./Cell";

function Playboard() {
  const dataCtx = useContext(DataContext);
  const tictac = dataCtx.data.tictac;

  return (
    <div className="flex flex-col mt-4 bg-Casal dark:bg-transparent">
      {tictac.map((column, i) => (
        <div key={i} className="flex flex-row">
          {column.map((cell, j) => (
            <Cell key={j} i={i} j={j} symbol={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Playboard;
