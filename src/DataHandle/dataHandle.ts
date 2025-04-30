import { player1, player2 } from "./dataStore";

export function getQuestionBodyForPlayer(player, index) {
  return player === 1 ? player1[index] : player2[index];
}
