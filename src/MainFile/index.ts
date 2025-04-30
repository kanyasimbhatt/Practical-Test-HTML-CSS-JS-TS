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
  let questionPlayer1 = 2;
  let questionPlayer2 = 1;

  for (let i = 0; i < 20; i++) {
    let timer = 10;
    let interval = setInterval(() => {
      if (timer === 1) clearInterval(interval);
      timer--;
      induceAnalysisSection(analysisSectionElement, 1, timer);
    }, 1000);
  }
});
