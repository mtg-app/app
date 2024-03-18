import { Button, StyleSheet, Text, View } from "react-native";
import { Player } from "../../Pages/Game";
import { getSquareDirection } from "./helpers";

interface PlayerSquareProps {
  players: Player[];
  player: Player;
  setPlayers: (players: Player[]) => void;
  rowIndex: number;
  colIndex: number;
}

const PlayerSquare = ({
  player,
  players,
  setPlayers,
  rowIndex,
  colIndex,
}: PlayerSquareProps) => {
  const squareDir = getSquareDirection(rowIndex, colIndex, players.length);

  return (
    <View style={styles.square}>
      <View style={squareDirStyles(squareDir).squareContent}>
        <Text>Player {player.index + 1}</Text>
        <View style={styles.buttonContainer}>
          <View>
            <Button
              title="-"
              onPress={() => {
                const newPlayers = [...players];
                newPlayers[player.index].life =
                  newPlayers[player.index].life - 1;
                setPlayers(newPlayers);
              }}
              color="red"
            />
          </View>
          <Text style={styles.lifeLabel}>{player.life}</Text>
          <View>
            <Button
              title="+"
              onPress={() => {
                const newPlayers = [...players];
                newPlayers[player.index].life =
                  newPlayers[player.index].life + 1;
                setPlayers(newPlayers);
              }}
              color="green"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
  },
  lifeLabel: {
    fontSize: 60,
  },
});

// create another stylesheet that accepts a param for the rotation
const squareDirStyles = (deg: "0deg" | "90deg" | "180deg" | "270deg") =>
  StyleSheet.create({
    squareContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transform: [{ rotate: deg }],
    },
  });

export default PlayerSquare;
