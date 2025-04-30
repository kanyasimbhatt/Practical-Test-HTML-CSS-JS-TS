import { induceNavbar } from "../Navbar/navbar";
import { induceMainQuizForm } from "../qiuzForm/quizForm";
import { induceAnalysisSection } from "../AnalysisSection/analysisSection";

document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementsByClassName("navbar-div")[0];
  const mainQuizFormElement =
    document.getElementsByClassName("quiz-form-wrapper")[0];
  const analysisSectionElement = document.getElementsByClassName(
    "quiz-player-turn-stats-timer"
  )[0];

  induceNavbar(navbarElement);
  induceMainQuizForm(mainQuizFormElement, 1, 1);

  handleDataDisplay(analysisSectionElement, mainQuizFormElement);
});

function handleDataDisplay(analysisSectionElement, mainQuizFormElement) {
  let questionPlayer1 = 2;
  let questionPlayer2 = 1;

  let timer = 10;
  let interval = setInterval(() => {
    if (timer === 1) clearInterval(interval);
    timer--;
    induceAnalysisSection(analysisSectionElement, 1, timer);
  }, 1000);
  for (let i = 1; i < 20; i++) {
    setTimeout(() => {
      if (i % 2 === 0) {
        induceMainQuizForm(mainQuizFormElement, questionPlayer1, 1);
        questionPlayer1++;
      } else {
        induceMainQuizForm(mainQuizFormElement, questionPlayer2, 2);
        questionPlayer2++;
      }
      let timer = 10;
      let interval = setInterval(() => {
        if (timer === 1) clearInterval(interval);
        timer--;

        i % 2 === 0
          ? induceAnalysisSection(analysisSectionElement, 1, timer)
          : induceAnalysisSection(analysisSectionElement, 2, timer);
      }, 1000);
    }, 10000 * i);
  }
}
