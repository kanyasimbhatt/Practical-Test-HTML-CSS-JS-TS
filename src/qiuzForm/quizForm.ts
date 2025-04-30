export function induceMainQuizForm(mainElement) {
  mainElement.innerHTML += `
    <div class="quiz-player-turn-stats-timer">
        <p>Player1 Got Correct:</p>
        <p>Question Passed so far:</p>
        <p>Player2 Got Correct:</p>
        <p>Question Passed so far</p>
        <p>Player Turn</p>
        <p>Timer:</p>
      </div>

      <div class="quiz-form-wrapper">
        <div class="question">sdfsd</div>

        <div class="options">
          <input type="radio" class="option" />
          <input type="radio" class="option" />
          <input type="radio" class="option" />
          <input type="radio" class="option" />
        </div>
      </div>`;
}
