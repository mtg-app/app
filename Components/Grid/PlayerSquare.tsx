import { Button, StyleSheet, Text, View } from "react-native";
import { Player } from "../../Pages/Game";
import { getSquareDirection } from "./helpers";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";

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

  const [isColorChangingOpen, setIsColorChangingOpen] = useState(false);

  return (
    <LinearGradient colors={player.color} style={styles.background}>
      <View style={styles.square}>
        <View style={squareDirStyles(squareDir).squareContent}>
          {isColorChangingOpen ? (
            <ColorPicker
              setIsColorChangingOpen={setIsColorChangingOpen}
              player={player}
              players={players}
              setPlayers={setPlayers}
            />
          ) : (
            <View>
              {/* TODO: need a better design for this button */}
              <View style={styles.colorButton}>
                <Button
                  title="C"
                  onPress={(prevState) => setIsColorChangingOpen(!!prevState)}
                />
              </View>
              {/* <Text>Player {player.index + 1}</Text> */}
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
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  square: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 80,
    fontFamily: "serif",
    textShadowColor: "white",
    textShadowRadius: 10,
  },
  background: {
    opacity: 0.9,
  },
  colorButton: {
    width: 30,
    alignSelf: "center",
  },
});

// create another stylesheet that accepts a param for the rotation
const squareDirStyles = (deg: "0deg" | "90deg" | "180deg" | "270deg") =>
  StyleSheet.create({
    squareContent: {
      display: "flex",
      justifyContent: "center",
      transform: [{ rotate: deg }],
    },
  });

export default PlayerSquare;
