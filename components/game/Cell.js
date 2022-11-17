/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
import { DataContext } from "../../context/DataContextProvider";

function Cell({ symbol, i, j }) {
  const dataCtx = useContext(DataContext);
  const tictac = dataCtx.data.tictac;
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (tictac[i][j] === 0) {
      setClicked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tictac]);

  return (
    <div
      onClick={() => {
        if (!clicked) {
          dataCtx.click(i, j);
          setClicked(true);
        }
      }}
      className={`border border-White border-2 h-[110px] md:h-[140px] w-[100px] md:w-[150px] lg:h-[170px] lg:w-[px] cursor-pointer ${
        symbol === 1 ? "p-3" : "p-5"
      } `}
    >
      {symbol ? (
        <img
          className="h-full w-full"
          src={symbol === 1 ? circle.src : cross.src}
          alt="tic tac symbols"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Cell;
