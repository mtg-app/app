import { useState } from "react";
import PlayerGrid from "../components/grid/PlayerGrid";
import { getRandomColor } from "../color-utils";

export interface Player {
  index: number;
  life: number;
  color: string[];
  dice?: {
    number: number;
    winner: boolean;
  };
}

export default function Game({ route }: any) {
  const playersParam = route.params.players;
  const startingLife = route.params.startingLife;

  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: playersParam }, (_, index) => ({
      index,
      life: startingLife,
      color: getRandomColor(),
    }))
  );

  return (
    <PlayerGrid
      players={players}
      setPlayers={setPlayers}
      startingLife={startingLife}
    />
  );
}
