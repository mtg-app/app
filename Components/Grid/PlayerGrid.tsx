import React from "react";
import { View, StyleSheet, Dimensions, Button } from "react-native";
import { Player } from "../../screens/Game";
import { getRowsAndCols } from "./helpers";
import PlayerSquare from "./PlayerSquare";
import { getRandomColor } from "../../color-utils";

interface PlayerGridProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  startingLife: number;
}

const PlayerGrid = ({ players, setPlayers, startingLife }: PlayerGridProps) => {
  const renderPlayerSquares = (
    player: Player,
    rowIndex: number,
    colIndex: number
  ) => {
    const squares = [];
    for (let i = 0; i < players.length; i++) {
      squares.push(
        <PlayerSquare
          key={i}
          players={players}
          player={player}
          setPlayers={setPlayers}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      );
    }
    return squares;
  };

  const { columns, rows } = getRowsAndCols(players.length);

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const squareWidth = screenWidth / columns;
  const squareHeight = screenHeight / rows;

  function rollDice() {
    // roll dice for each player
    let playersAndScores = players.map((player) => {
      return {
        playerIndex: player.index,
        score: Math.floor(Math.random() * 6) + 1,
      };
    });

    // find the player with the highest score, then return it
    const highestScore = playersAndScores.reduce((prev, current) =>
      prev.score > current.score ? prev : current
    );

    // set the dice number and winner and for each player
    for (let i = 0; i < players.length; i++) {
      setPlayers((prevPlayers: Player[]) => {
        const newPlayers = [...prevPlayers];
        newPlayers[i].dice = {
          number: playersAndScores[i].score,
          winner: players[i].index === highestScore?.playerIndex ? true : false,
        };
        return newPlayers;
      });

      // wait 3 seconds before clearing the dice value
      setTimeout(() => {
        setPlayers((prevPlayers: Player[]) => {
          const newPlayers = [...prevPlayers];
          newPlayers[i].dice = undefined;
          return newPlayers;
        });
      }, 3000);
    }
  }

  function addPlayer() {
    setPlayers((prevPlayers: Player[]) => {
      const newPlayers = [...prevPlayers];
      newPlayers.push({
        index: newPlayers.length,
        life: startingLife,
        color: getRandomColor(),
      });
      return newPlayers;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="D" onPress={rollDice} />
        {players.length < 6 && <Button title="+" onPress={addPlayer} />}
      </View>
      {[...Array(rows)].map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {[...Array(columns)].map((_, colIndex) => {
            const playerIndex = rowIndex * columns + colIndex;
            const isLastRow = rowIndex === rows - 1;
            const isSingleSquareInRow =
              players.length % columns === 1 &&
              colIndex === 0 &&
              playerIndex === players.length - 1;
            return playerIndex < players.length ? (
              <View
                key={playerIndex}
                style={[
                  styles.square,
                  {
                    width: isSingleSquareInRow ? screenWidth : squareWidth,
                    height: squareHeight,
                  },
                  isLastRow && { marginBottom: 0 }, // Remove marginBottom for the last row
                ]}
              >
                {
                  renderPlayerSquares(players[playerIndex], rowIndex, colIndex)[
                    playerIndex
                  ]
                }
              </View>
            ) : null;
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  square: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
});

export default PlayerGrid;
