import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface Player {
  index: number;
  life: number;
}

export default function Game({ navigation, route }: any) {
  const playersParam = route.params.players;
  const startingLife = route.params.startingLife;

  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: playersParam }, (_, index) => ({
      index,
      life: startingLife,
    }))
  );

  return (
    <View style={styles.container}>
      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <Text>
            Player {index + 1}, Life: {player.life}
          </Text>
          <View style={styles.button}>
            <Button
              title="+"
              onPress={() => {
                const newPlayers = [...players];
                newPlayers[index].life = newPlayers[index].life + 1;
                setPlayers(newPlayers);
              }}
              color="green"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={() => {
                const newPlayers = [...players];
                newPlayers[index].life = newPlayers[index].life - 1;
                setPlayers(newPlayers);
              }}
              color="red"
            />
          </View>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  playerContainer: {
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 10,
    width: 50,
  },
});
