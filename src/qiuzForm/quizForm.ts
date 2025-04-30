import { getQuestionBodyForPlayer } from "../DataHandle/dataHandle";
import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";

export function induceMainQuizForm(mainElement, index, player) {
  let questionBody = getQuestionBodyForPlayer(player, index - 1);
  mainElement.innerHTML = `

        <form class="form-element">
        <h3 class="question">Question ${index}: ${questionBody.question}</h3>

            <div class = "option-label-wrapper">
                <input type="radio" id = "option1" name = "quiz-option" value="${questionBody.correct_answer}"/>
                <label for = "option1"> ${questionBody.correct_answer} </label>
            </div>

            <div class = "option-label-wrapper">
                <input type="radio" id = "option2" name = "quiz-option" value="${questionBody.incorrect_answers[0]}" />
                <label for = "option2"> ${questionBody.incorrect_answers[0]} </label>
            </div>

            <div class = "option-label-wrapper">
                <input type="radio" id = "option3" name = "quiz-option" value="${questionBody.incorrect_answers[1]}"/>
                <label for = "option3"> ${questionBody.incorrect_answers[1]} </label>
            </div>

            <div class = "option-label-wrapper">
                <input type="radio" name = "quiz-option" id = "option4" value="${questionBody.incorrect_answers[2]}"/>
                <label for = "option4"> ${questionBody.incorrect_answers[2]} </label>
            </div>
            </form>
  
      `;
}
