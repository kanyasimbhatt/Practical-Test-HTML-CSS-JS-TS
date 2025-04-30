import { getQuestionBodyForPlayer } from "../DataHandle/dataHandle";
import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";

export function induceMainQuizForm(mainElement, index, player, timer) {
  let questionBody = getQuestionBodyForPlayer(player, index);
  mainElement.innerHTML = `
    <div class="quiz-player-turn-stats-timer">
        <p>Player1 Got Correct: ${player1Analysis.CorrectlyAnswered}</p>
        <p>Question Passed so far: ${player1Analysis.questionsPassed}</p>
        <p>Player2 Got Correct: ${player2Analysis.CorrectlyAnswered}</p>
        <p>Question Passed so far: ${player2Analysis.questionsPassed}</p>
        <p>Player Turn: Player${index}</p>
        <p>Timer: ${timer}</p>
      </div>

      <div class="quiz-form-wrapper">
        <div class="question">Question ${index}: ${questionBody.question}</div>

        <div class="options">
            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option1'/>
                <label for = 'option1'> ${questionBody.correct_answer} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option1'/>
                <label for = 'option1'> ${questionBody.incorrect_answers[0]} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option1'/>
                <label for = 'option1'> ${questionBody.incorrect_answers[1]} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option1'/>
                <label for = 'option1'> ${questionBody.incorrect_answers[2]} </label>
            </div>
            
        </div>
      </div>`;
}
