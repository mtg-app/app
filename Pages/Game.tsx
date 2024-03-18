import { useState } from "react";
import { View } from "react-native";
import PlayerGrid from "../Components/Grid/PlayerGrid";

export interface Player {
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
    // <View>
    <PlayerGrid players={players} setPlayers={setPlayers} />
    // </View>
  );
}
