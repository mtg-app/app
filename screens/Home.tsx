import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

function onClick(type: "guest" | "login") {
  console.log("Button clicked!", type);
}

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="+ Guest game"
            onPress={() => navigation.navigate("PreGame", { name: "Jane" })}
            color="black"
          />
        </View>
        <View style={styles.button}>
          <Button title="Login" onPress={() => onClick("login")} color="red" />
        </View>
      </View>
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
  title: {
    marginBottom: 20,
  },
  button: {
    width: "50%",
    margin: 10,
  },
  buttonContainer: {
    justifyContent: "space-between",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
});
