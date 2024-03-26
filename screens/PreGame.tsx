import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function PreGame({ navigation }: any) {
  const [players, setPlayers] = useState(2);
  const [startingLife, setStartingLife] = useState(40);
  const [error, setError] = useState(false);

  function onStartGame() {
    // check if players and startingLife are valid (numbers and > 0)
    if (
      isNaN(players) ||
      isNaN(startingLife) ||
      players < 1 ||
      startingLife < 1
    ) {
      setError(true);
    } else {
      navigation.navigate("Game", { players, startingLife });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Players:</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          defaultValue="2"
          onChangeText={(t) => setPlayers(parseInt(t))}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Starting life:</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          defaultValue="40"
          onChangeText={(t) => setStartingLife(parseInt(t))}
        />
      </View>
      <View style={styles.button}>
        <Button title="Start" onPress={onStartGame} color="black" />
      </View>
      {error && (
        <Text style={styles.errorLabel}>Please select valid inputs</Text>
      )}
      {/* Commented this out as there is a bug: https://github.com/expo/router/pull/773 and need to figure this on for iOS */}
      {/* <StatusBar style="auto" /> */}
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
  button: {
    width: "30%",
    margin: 10,
  },
  inputContainer: {
    padding: 10,
    flexDirection: "column",
  },
  input: {
    height: 40,
    // margin: 12,
    // borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
  },
  errorLabel: {
    color: "red",
  },
});
