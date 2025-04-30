import { PlayerAnalysis } from "../DataHandle/dataStore";

export function induceAnalysisPage(element: HTMLDivElement) {
  let player1Analysis: PlayerAnalysis = JSON.parse(
    localStorage.getItem("player1Analysis") as string
  );
  let player2Analysis: PlayerAnalysis = JSON.parse(
    localStorage.getItem("player2Analysis") as string
  );

  element.innerHTML = `
    <div class="analysis-section-heading">
        <h1>Analysis Of Game</h1>
      </div>

      <div class="analysis-section-information">
        <div class="player1-information">
          <h3>Player1</h3>
          <p>Total Answered: ${
            player1Analysis.CorrectlyAnswered +
            player1Analysis.incorrectQuestions
          }</p>
          <p>Total Correct: ${player1Analysis.CorrectlyAnswered}</p>
          <p>Total Incorrect: ${player1Analysis.incorrectQuestions}</p>
          <p>Total Unanswered: ${
            10 -
            (player1Analysis.CorrectlyAnswered +
              player1Analysis.incorrectQuestions)
          }</p>
        </div>
        <div class="player2-information">
          <h3>Player2</h3>
          <p>Total Answered: ${
            player2Analysis.CorrectlyAnswered +
            player2Analysis.incorrectQuestions
          }</p>
          <p>Total Correct: ${player2Analysis.CorrectlyAnswered}</p>
          <p>Total Incorrect: ${player2Analysis.incorrectQuestions}</p>
          <p>Total Unanswered: ${
            10 -
            (player2Analysis.CorrectlyAnswered +
              player2Analysis.incorrectQuestions)
          }</p>
        </div>
      </div>

      <div class="analysis-section-winner-play-again">
        <p>Winner:</p>
        <button class="play-again-button">Play Again</button>
      </div>
    `;
}
