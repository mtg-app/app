import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Player } from "../../screens/Game";
import { getRowsAndCols } from "./helpers";
import PlayerSquare from "./PlayerSquare";

interface PlayerGridProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

const PlayerGrid = ({ players, setPlayers }: PlayerGridProps) => {
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

  return (
    <View style={styles.container}>
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
});

export default PlayerGrid;
