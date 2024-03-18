export function getRowsAndCols(playersNum: number): {
  columns: number;
  rows: number;
} {
  let columns: number;
  let rows: number;
  switch (playersNum) {
    case 2:
      columns = 1;
      rows = 2;
      break;
    case 3:
      columns = 2;
      rows = 2;
      break;
    case 4:
      columns = 2;
      rows = 2;
      break;
    case 5:
      columns = 2;
      rows = 3;
      break;
    case 6:
      columns = 2;
      rows = 3;
      break;
    default:
      columns = 2;
      rows = 2;
      break;
  }

  return {
    columns,
    rows,
  };
}

export function getSquareDirection(
  rowIndex: number,
  colIndex: number,
  numOfPlayers: number
): "0deg" | "90deg" | "180deg" | "270deg" {
  // if there's 2 players, the one up top should be rotated 180deg and the one at the bottom should be rotated 0deg
  if (numOfPlayers === 2) {
    return rowIndex === 0 ? "180deg" : "0deg";
  }
  // if there's 3 players, the one on the top left should be rotated 90deg, the one on the top right should be rotated 270deg, and the one at the bottom should be rotated 0deg
  if (numOfPlayers === 3) {
    return rowIndex === 0 ? (colIndex === 0 ? "90deg" : "270deg") : "0deg";
  }
  // if there's 4 players, the one on the top left should be rotated 90deg, the one on the top right should be rotated 270deg, the one on the bottom left should be rotated 90deg, and the one on the bottom right should be rotated 270deg
  if (numOfPlayers === 4) {
    return rowIndex === 0
      ? colIndex === 0
        ? "90deg"
        : "270deg"
      : colIndex === 0
      ? "90deg"
      : "270deg";
  }
  // if there's 5 players, the one on the top left should be rotated 90deg, the one on the top right should be rotated 270deg, the one on the middle left should be rotated 90deg, the one on the middle right should be rotated 270deg, and the one at the bottom should be rotated 270deg
  if (numOfPlayers === 5) {
    return rowIndex === 0
      ? colIndex === 0
        ? "90deg"
        : "270deg"
      : colIndex === 0
      ? "90deg"
      : rowIndex === 1
      ? "270deg"
      : "0deg";
  }
  // if there's 6 players, the one on the top left should be rotated 90deg, the one on the top right should be rotated 270deg, the one on the middle left should be rotated 90deg, the one on the middle right should be rotated 270deg, the one on the bottom left should be rotated 90deg, and the one on the bottom right should be rotated 270deg
  if (numOfPlayers === 6) {
    return rowIndex === 0
      ? colIndex === 0
        ? "90deg"
        : "270deg"
      : colIndex === 0
      ? "90deg"
      : "270deg";
  }
  return "0deg";
}
