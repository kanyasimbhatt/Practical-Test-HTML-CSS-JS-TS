import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";
export function induceAnalysisSection(element, index, timer) {
  element.innerHTML = `
        <p>Player1 Got Correct: ${player1Analysis.CorrectlyAnswered}</p>
       
        <p>Player2 Got Correct: ${player2Analysis.CorrectlyAnswered}</p>
     
        <p>Player Turn: Player${index}</p>
        <p>Timer: ${timer}</p>
    `;
}
