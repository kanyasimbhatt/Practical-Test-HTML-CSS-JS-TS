export function induceAnalysisPage(element: HTMLDivElement) {
  element.innerHTML = `
    <div class="analysis-section-heading">
        <h1>Analysis Of Game</h1>
      </div>

      <div class="analysis-section-information">
        <div class="player1-information">
          <h3>Player1</h3>
          <p>Total Answered:</p>
          <p>Total Correct:</p>
          <p>Total Incorrect:</p>
          <p>Total Unanswered:</p>
        </div>
        <div class="player2-information">
          <h3>Player2</h3>
          <p>Total Answered:</p>
          <p>Total Correct:</p>
          <p>Total Incorrect:</p>
          <p>Total Unanswered:</p>
        </div>
      </div>

      <div class="analysis-section-winner-play-again">
        <p>Winner:</p>
        <button class="play-again-button">Play Again</button>
      </div>
    `;
}
