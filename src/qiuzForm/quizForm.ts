import { getQuestionBodyForPlayer } from "../DataHandle/dataHandle";
import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";

export function induceMainQuizForm(mainElement, index, player) {
  let questionBody = getQuestionBodyForPlayer(player, index);
  mainElement.innerHTML = `
   


        <div class="question">Question ${index}: ${questionBody.question}</div>

        <form class="options">
            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option1'/>
                <label for = 'option1'> ${questionBody.correct_answer} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option2'/>
                <label for = 'option2'> ${questionBody.incorrect_answers[0]} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option3'/>
                <label for = 'option3'> ${questionBody.incorrect_answers[1]} </label>
            </div>

            <div class = 'option-label-wrapper'>
                <input type="radio" class="option" id = 'option4'/>
                <label for = 'option4'> ${questionBody.incorrect_answers[2]} </label>
            </div>
            </form>
  
      `;
}
