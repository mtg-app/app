import { useState } from "react";
import PlayerGrid from "../Components/Grid/PlayerGrid";
import { getRandomColor } from "../color-utils";

export interface Player {
  index: number;
  life: number;
  color: string[];
}

export default function Game({ navigation, route }: any) {
  const playersParam = route.params.players;
  const startingLife = route.params.startingLife;

  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: playersParam }, (_, index) => ({
      index,
      life: startingLife,
      color: getRandomColor(),
    }))
  );

  return <PlayerGrid players={players} setPlayers={setPlayers} />;
}
