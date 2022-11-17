import { data } from "autoprefixer";
import { useContext, useState } from "react";
import Alert from "../components/Alert";
import Playboard from "../components/game/Playboard";
import ResetVotes from "../components/game/ResetVotes";
import Results from "../components/game/Results";
import Title from "../components/game/Title";
import Turn from "../components/game/Turn";
import VoteControllers from "../components/game/VoteControllers";
import Toggle from "../components/Toggle";
import { DataContext } from "../context/DataContextProvider";

export default function Home() {
  const datactx = useContext(DataContext);
  const data = datactx.data;
  return (
    <div
      className={` dark:bg-Haiti mx-auto flex items-center justify-center min-w-screen relative  ${
        data.gameCompleted ? "max-h-screen overflow-hidden" : "min-h-screen"
      }`}
    >
      {data.gameCompleted && (
        <>
          <div className="absolute inset-0 bg-black/20"></div>

          <Alert message={data.finalResult} />
        </>
      )}

      <div className="container px-[10px] md:px-[50px] lg:px-0">
        <div className="flex w-100 md:w-[90vw] md:mt-4 justify-end items-end p-2">
          <Toggle />
        </div>
        <div className="container-inner flex items-center justify-center w-full">
          <div className="lg:min-w-[1000px]">
            <Title />

            <div className="w-100 flex flex-col md:flex-row md:justify-between md:mt-4">
              <ResetVotes />
              <Turn turn={data.turn} />
            </div>
            <div className="md:mt-2 flex flex-col md:flex-row md:justify-center md:items-center w-full md:pb-[3rem]">
              <div className="flex flex-col items-center w-100">
                <Playboard />
                <VoteControllers />
              </div>
              {data.results.length && <Results />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
