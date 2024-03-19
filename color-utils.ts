export const redGradient = [
  "#b20000",
  "#a30001",
  "#940002",
  "#850001",
  "#760000",
];
export const blueGradient = [
  "#0000b2",
  "#0000a3",
  "#000094",
  "#000085",
  "#000076",
];
export const greenGradient = [
  "#00c21d",
  "#00a51d",
  "#00891b",
  "#006d17",
  "#025313",
];
export const blackGradient = [
  "#000000",
  "#090809",
  "#111010",
  "#161515",
  "#1b1a1a",
];
export const whiteGradient = [
  "#dddddd",
  "#e5e5e5",
  "#eeeeee",
  "#f6f6f6",
  "#ffffff",
];

export function getRandomColor(): string[] {
  const colors = [
    redGradient,
    blueGradient,
    greenGradient,
    blackGradient,
    whiteGradient,
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
