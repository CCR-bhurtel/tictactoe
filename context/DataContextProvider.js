/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

function DataContextProvider(props) {
  const [data, setData] = useState({
    currentRound: 1,
    turn: 1,
    totalRound: 3,
    voteCount: {
      thisgame: 0,
      thisround: 0,
    },
    resetVotes: {
      player1: {
        thisround: false,
        thisgame: false,
      },
      player2: {
        thisround: false,
        thisgame: false,
      },
    },
    tictac: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    gameCompleted: false,
    finalResult: "",
    results: [{ round: 1, result: "Waiting for result", playerid: 0 }],
  });

  // results :- "Player 1 won, Match Tie, Waiting for result"

  const resetRound = () => {
    setData({
      ...data,
      turn: 1,
      voteCount: {
        ...data.voteCount,
        thisround: 0,
      },
      resetVotes: {
        player1: {
          ...data.resetVotes["player1"],

          thisround: false,
        },
        player2: {
          ...data.resetVotes["player2"],

          thisround: false,
        },
      },
      tictac: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    });
  };
  const resetGame = () => {
    setData({
      currentRound: 1,
      turn: 1,
      totalRound: 3,
      voteCount: {
        thisgame: 0,
        thisround: 0,
      },
      gameCompleted: false,
      finalResult: "",
      resetVotes: {
        player1: {
          thisround: false,
          thisgame: false,
        },
        player2: {
          thisround: false,
          thisgame: false,
        },
      },
      tictac: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      results: [{ round: 1, result: "Waiting for result", playerid: 0 }],
    });
  };

  const giveFinalResult = () => {
    let player1 = 0;
    let player2 = 0;
    data.results.forEach((result) => {
      if (result.playerid == 1) {
        player1++;
      } else if (result.playerid == 2) {
        player2++;
      }
    });
    if (player1 > player2) {
      setData({
        ...data,
        gameCompleted: true,
        finalResult: "Player 1 won the game",
      });
    } else if (player1 < player2) {
      setData({
        ...data,
        gameCompleted: true,
        finalResult: "Player 2 won the game",
      });
    } else {
      setData({
        ...data,
        gameCompleted: true,
        finalResult: "Game tied",
      });
    }
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const changeRound = (newResults) => {
    if (data.currentRound < data.totalRound) {
      resetRound();

      setData({
        ...data,
        currentRound: data.currentRound + 1,
        results: newResults,
        tictac: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      });
    } else if (data.currentRound === data.totalRound) {
      setData({ ...data, results: newResults });
      setTimeout(() => {
        giveFinalResult();
      }, 1000);
      // More to work
    }
  };

  const setResult = (result, playerid) => {
    const oldResults = data.results;
    const newResults = oldResults.map((item) => {
      if (item.round == data.currentRound) {
        return { round: data.currentRound, result, playerid };
      } else {
        return item;
      }
    });
    if (data.currentRound < data.totalRound) {
      newResults.push({
        round: data.currentRound + 1,
        result: "Waiting for result",
        playerid: 0,
      });
    }

    setTimeout(() => {
      changeRound(newResults);
    }, 200);
  };
  const tictac = data.tictac;

  const checkDimensions = () => {
    if (
      tictac[0][0] != 0 &&
      tictac[0][0] == tictac[1][1] &&
      tictac[0][0] == tictac[2][2]
    ) {
      return tictac[0][0];
    } else if (
      tictac[0][2] != 0 &&
      tictac[0][2] == tictac[1][1] &&
      tictac[0][2] == tictac[2][0]
    ) {
      return tictac[0][2];
    } else {
      return 0;
    }
  };

  const checkRows = () => {
    if (
      tictac[0][0] != 0 &&
      tictac[0][0] == tictac[0][1] &&
      tictac[0][0] == tictac[0][2]
    ) {
      return tictac[0][0];
    } else if (
      tictac[1][0] != 0 &&
      tictac[1][0] == tictac[1][1] &&
      tictac[1][0] == tictac[1][2]
    ) {
      return tictac[1][0];
    } else if (
      tictac[2][0] != 0 &&
      tictac[2][0] == tictac[2][1] &&
      tictac[2][0] == tictac[2][2]
    ) {
      return tictac[2][0];
    } else {
      return 0;
    }
  };

  const checkColumns = () => {
    if (
      tictac[0][0] != 0 &&
      tictac[0][0] == tictac[1][0] &&
      tictac[0][0] == tictac[2][0]
    ) {
      return tictac[0][0];
    } else if (
      tictac[0][1] != 0 &&
      tictac[0][1] == tictac[1][1] &&
      tictac[0][1] == tictac[2][1]
    ) {
      return tictac[0][1];
    } else if (
      tictac[0][2] != 0 &&
      tictac[0][2] == tictac[1][2] &&
      tictac[0][2] == tictac[2][2]
    ) {
      return tictac[0][2];
    } else {
      return 0;
    }
  };

  const includesSpaceInBoard = () => {
    let includes = false;
    data.tictac.forEach((row) => {
      row.forEach((number) => {
        if (number === 0) {
          includes = true;
          return;
        }
      });
      if (includes) return;
    });
    return includes;
  };

  const checkGameComplete = () => {
    const dimensionWinner = checkDimensions();

    const rowWinner = checkRows();
    const columnWinner = checkColumns();
    if (dimensionWinner > 0) {
      setResult(`player ${dimensionWinner} won`, dimensionWinner);
    } else if (rowWinner > 0) {
      setResult(`player ${rowWinner} won`, rowWinner);
    } else if (columnWinner > 0) {
      setResult(`player ${columnWinner} won`, columnWinner);
    } else if (!includesSpaceInBoard()) {
      setResult("Match tie", 0);
    }
  };

  useEffect(() => {
    if (data.voteCount.thisround === 2) {
      resetRound();
    }
    if (data.voteCount.thisgame === 2) {
      resetGame();
    }
  }, [data.voteCount]);

  const vote = (voteid) => {
    //   voteid can be "thisgame" or "thisround"
    const turn = data.turn;
    const key = "player" + turn;

    const resetVotes = {
      ...data.resetVotes,
      [key]: {
        ...data.resetVotes[key],
        [voteid]: true,
      },
    };

    setData({
      ...data,
      voteCount: {
        ...data.voteCount,
        [voteid]: data.voteCount[voteid] + 1,
      },
      resetVotes: { ...resetVotes },
    });
  };

  const unvote = (voteid) => {
    const turn = data.turn;
    const key = "player" + turn;

    const resetVotes = {
      ...data.resetVotes,
      [key]: {
        ...data.resetVotes[key],
        [voteid]: false,
      },
    };

    setData({
      ...data,
      voteCount: {
        ...data.voteCount,
        [voteid]: data.voteCount[voteid] - 1,
      },
      resetVotes: { ...resetVotes },
    });
  };

  const click = (m, n) => {
    const tictac = data.tictac;
    tictac[m][n] = data.turn;
    setData({
      ...data,
      tictac,
      turn: data.turn === 1 ? data.turn + 1 : data.turn - 1,
    });
    checkGameComplete();
  };

  return (
    <DataContext.Provider value={{ data, vote, unvote, click }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
