export const commonHTMLElements = {
  mainQuizFormElement: document.getElementsByClassName("quiz-form-wrapper")[0],
  analysisSectionElement: document.getElementsByClassName(
    "quiz-player-turn-stats-timer"
  )[0],

  analysisElement: document.getElementsByClassName(
    "analysis section"
  )[0] as HTMLDivElement,
  questionsElement: document.getElementsByClassName(
    "quiz-timer-form"
  )[0] as HTMLDivElement,
  navbarElement: document.getElementsByClassName("navbar-div")[0],
};
