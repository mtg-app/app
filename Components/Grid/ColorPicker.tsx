import { Button, View, StyleSheet } from "react-native";
import { Player } from "../../Pages/Game";
import {
  blackGradient,
  blueGradient,
  greenGradient,
  redGradient,
  whiteGradient,
} from "../../color-utils";

interface ColorPickerProps {
  setIsColorChangingOpen: (isColorChangingOpen: boolean) => void;
  player: Player;
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

export function ColorPicker({
  setIsColorChangingOpen,
  player,
  players,
  setPlayers,
}: ColorPickerProps) {
  function onClick(color: "red" | "green" | "blue" | "black" | "white") {
    setIsColorChangingOpen(false);
    const newPlayers = [...players];
    switch (color) {
      case "red":
        newPlayers[player.index].color = redGradient;
        setPlayers(newPlayers);
        break;
      case "green":
        newPlayers[player.index].color = greenGradient;
        setPlayers(newPlayers);
        break;
      case "blue":
        newPlayers[player.index].color = blueGradient;
        setPlayers(newPlayers);
        break;
      case "black":
        newPlayers[player.index].color = blackGradient;
        setPlayers(newPlayers);
        break;
      case "white":
        newPlayers[player.index].color = whiteGradient;
        setPlayers(newPlayers);
        break;
    }
  }
  return (
    // TODO: need a better design for this (probably add the ability to change multiple colors at once, then add new gradient for each color combination)
    <View style={styles.content}>
      <View style={styles.button}>
        <Button title="" color="red" onPress={() => onClick("red")} />
      </View>
      <View style={styles.button}>
        <Button title="" color="green" onPress={() => onClick("green")} />
      </View>
      <View style={styles.button}>
        <Button title="" color="blue" onPress={() => onClick("blue")} />
      </View>
      <View style={styles.button}>
        <Button title="" color="black" onPress={() => onClick("black")} />
      </View>
      <View style={styles.button}>
        <Button title="" color="white" onPress={() => onClick("white")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    width: 30,
    marginRight: 10,
    // round borders
    borderRadius: 100,
    overflow: "hidden",
  },
});
