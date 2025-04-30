import { player1, player2 } from "./dataStore";

export function getQuestionBodyForPlayer(player: number, index: number) {
  return player === 1 ? player1[index] : player2[index];
}
