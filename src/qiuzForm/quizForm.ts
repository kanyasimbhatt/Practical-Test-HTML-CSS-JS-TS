import { getQuestionBodyForPlayer } from "../DataHandle/dataHandle";
import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";

export function induceMainQuizForm(mainElement, index, player) {
  let questionBody = getQuestionBodyForPlayer(player, index - 1);
  mainElement.innerHTML = `

        <form class="form-element">
        <h3 class="question">Question ${index}: ${questionBody.question}</h3>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option1" id = 'option1' value='${questionBody.correct_answer}'/>
                <label for = 'option1'> ${questionBody.correct_answer} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option2" id = 'option2' value='${questionBody.incorrect_answers[0]}' />
                <label for = 'option2'> ${questionBody.incorrect_answers[0]} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option3" id = 'option3' value='${questionBody.incorrect_answers[1]}'/>
                <label for = 'option3'> ${questionBody.incorrect_answers[1]} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option4" id = 'option4' value='${questionBody.incorrect_answers[2]}'/>
                <label for = 'option4'> ${questionBody.incorrect_answers[2]} </label>
            </div>
            </form>
  
      `;
}
