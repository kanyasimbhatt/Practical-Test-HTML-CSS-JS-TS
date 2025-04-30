import { induceNavbar } from "../Navbar/navbar";
import { induceMainQuizForm } from "../qiuzForm/quizForm";
import { induceAnalysisSection } from "../AnalysisSection/analysisSection";
import { induceAnalysisPage } from "../finalAnalysispage/analysisPage";
import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";
import { player1, player2 } from "../DataHandle/dataStore";
import { commonHTMLElements } from "../CommonElements/commonElements";
let selectedAnswerPlayer1 = "";
let selectedAnswerPlayer2 = "";
let index = 0;
let questionPlayer1 = 2;
let questionPlayer2 = 1;
let flag = false;
let setTimer;

document.addEventListener("DOMContentLoaded", () => {
  induceNavbar(commonHTMLElements.navbarElement);
  induceMainQuizForm(commonHTMLElements.mainQuizFormElement, 1, 1);
  handleDataDisplay(
    commonHTMLElements.analysisSectionElement,
    commonHTMLElements.mainQuizFormElement
  );
  initEventListeners();
});

function handleDataDisplay(analysisSectionElement, mainQuizFormElement) {
  let timer = 10;
  let interval = setInterval(() => {
    if (timer === 1) clearInterval(interval);
    timer--;
    induceAnalysisSection(analysisSectionElement, 1, timer);
  }, 1000);
  for (let i = 1; i < 20; i++) {
    setTimer = setTimeout(() => {
      handleSetTimeOutCode(i, mainQuizFormElement, analysisSectionElement);
    }, 10000 * i);
  }

  setTimeout(() => {
    showAnalysisPage();
    const playAgainButtonElement = document.getElementsByClassName(
      "play-again-button"
    )[0] as HTMLButtonElement;
    playAgainButtonElement.addEventListener("click", () => {
      handlePlayAgain();
    });
  }, 200000);
}

function showAnalysisPage() {
  commonHTMLElements.questionsElement.style.display = "none";
  induceAnalysisPage(commonHTMLElements.analysisElement);
}

function initEventListeners() {
  const formElement = document.getElementsByClassName(
    "form-element"
  )[0] as HTMLDivElement;
  const saveProgressElement =
    document.getElementsByClassName("save-progress")[0];

  saveProgressElement.addEventListener("click", () => {
    flag = true;
  });

  formElement.addEventListener("click", (e: Event) => {
    handleOptionSelect(e);
  });
}

function handlePlayAgain() {
  commonHTMLElements.analysisElement.style.display = "none";
  commonHTMLElements.questionsElement.style.display = "block";
  induceMainQuizForm(commonHTMLElements.mainQuizFormElement, 1, 1);

  handleDataDisplay(
    commonHTMLElements.analysisSectionElement,
    commonHTMLElements.mainQuizFormElement
  );
  initEventListeners();
}

function handleOptionSelect(e: Event) {
  if (index % 2 === 0 && "value" in e.target!) {
    selectedAnswerPlayer1 = e.target.value as string;
  } else {
    if ("value" in e.target!) {
      selectedAnswerPlayer2 = e.target.value as string;
    }
  }
}

function handleSetTimeOutCode(
  i: number,
  mainQuizFormElement: HTMLDivElement,
  analysisSectionElement: HTMLDivElement
) {
  index = i;
  if (i % 2 === 0) {
    induceMainQuizForm(mainQuizFormElement, questionPlayer1, 1);
    questionPlayer1++;
    handleAnalysisObjectUpdationPlayer2(questionPlayer2);
    selectedAnswerPlayer2 = "";
  } else {
    induceMainQuizForm(mainQuizFormElement, questionPlayer2, 2);
    questionPlayer2++;
    handleAnalysisObjectUpdationPlayer1(questionPlayer1);
    selectedAnswerPlayer1 = "";
  }
  initEventListeners();
  let timer = 10;
  let interval = setInterval(() => {
    if (flag) {
      let obj = {
        player: i % 2 === 0 ? 1 : 2,
        timer: timer,
        questionPlayer1: questionPlayer1,
        questionPlayer2: questionPlayer2,
        player1Score: player1Analysis.CorrectlyAnswered,
        Player2Score: player2Analysis.CorrectlyAnswered,
      };

      localStorage.setItem("save-progress-data", JSON.stringify(obj));
      clearTimeout(setTimer);
      showAnalysisPage();
    }
    if (timer === 1) clearInterval(interval);
    timer--;

    i % 2 === 0
      ? induceAnalysisSection(analysisSectionElement, 1, timer)
      : induceAnalysisSection(analysisSectionElement, 2, timer);
  }, 1000);
}

function handleAnalysisObjectUpdationPlayer1(questionPlayer1: number) {
  if (selectedAnswerPlayer1 === "") {
    player1Analysis.unansweredQuestions += 1;
  } else if (
    selectedAnswerPlayer1 === player1[questionPlayer1 - 2].correct_answer
  ) {
    player1Analysis.CorrectlyAnswered += 1;
  } else {
    player1Analysis.incorrectQuestions += 1;
  }
  localStorage.setItem("player1Analysis", JSON.stringify(player1Analysis));
}

function handleAnalysisObjectUpdationPlayer2(questionPlayer2: number) {
  if (selectedAnswerPlayer2 === "") {
    player2Analysis.unansweredQuestions += 1;
  } else if (
    selectedAnswerPlayer2 === player2[questionPlayer2 - 2].correct_answer
  ) {
    player2Analysis.CorrectlyAnswered += 1;
  } else {
    player2Analysis.incorrectQuestions += 1;
  }

  localStorage.setItem("player2Analysis", JSON.stringify(player2Analysis));
}
