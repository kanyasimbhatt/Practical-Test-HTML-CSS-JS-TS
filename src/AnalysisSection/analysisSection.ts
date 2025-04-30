import { PlayerAnalysis } from "../DataHandle/dataStore";

export function induceAnalysisSection(element, player, timer) {
  let player1Analysis: PlayerAnalysis = JSON.parse(
    localStorage.getItem("player1Analysis") as string
  );

  let player2Analysis: PlayerAnalysis = JSON.parse(
    localStorage.getItem("player2Analysis") as string
  );

  element.innerHTML = `
        <p>Player1 Got Correct: ${player1Analysis.CorrectlyAnswered}</p>
       
        <p>Player2 Got Correct: ${player2Analysis.CorrectlyAnswered}</p>
     
        <p>Player Turn: Player${player}</p>
        <p>Timer: ${timer}</p>
    `;
}
