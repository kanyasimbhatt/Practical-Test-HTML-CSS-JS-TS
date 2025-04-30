import { induceNavbar } from "../Navbar/navbar";
import { induceMainQuizForm } from "../qiuzForm/quizForm";
import { induceAnalysisSection } from "../AnalysisSection/analysisSection";
import { induceAnalysisPage } from "../finalAnalysispage/analysisPage";
import { player1Analysis, player2Analysis } from "../DataHandle/dataStore";
import { player1, player2 } from "../DataHandle/dataStore";
import { commonHTMLElements } from "../CommonElements/commonElements";
class quizApplication {
  selectedAnswerPlayer1: string;
  selectedAnswerPlayer2: string;
  index: number;
  questionPlayer1: number;
  questionPlayer2: number;
  setTimer;
  constructor() {
    this.selectedAnswerPlayer1 = "";
    this.selectedAnswerPlayer2 = "";
    this.index = 0;
    this.questionPlayer1 = 2;
    this.questionPlayer2 = 1;
    this.setTimer;

    induceNavbar(commonHTMLElements.navbarElement);
    induceMainQuizForm(commonHTMLElements.mainQuizFormElement, 1, 1);
    this.handleDataDisplay(
      commonHTMLElements.analysisSectionElement,
      commonHTMLElements.mainQuizFormElement
    );
    this.initEventListeners();
  }

  handleDataDisplay(analysisSectionElement, mainQuizFormElement) {
    let timer = 10;
    let interval = setInterval(() => {
      if (timer === 1) clearInterval(interval);
      timer--;
      induceAnalysisSection(analysisSectionElement, 1, timer);
    }, 1000);
    for (let i = 1; i < 20; i++) {
      this.setTimer = setTimeout(() => {
        this.handleSetTimeOutCode(
          i,
          mainQuizFormElement,
          analysisSectionElement
        );
      }, 10000 * i);
    }

    setTimeout(() => {
      this.showAnalysisPage();
    }, 200000);
  }

  showAnalysisPage() {
    commonHTMLElements.questionsElement.style.display = "none";
    induceAnalysisPage(commonHTMLElements.analysisElement);
    const playAgainButtonElement = document.getElementsByClassName(
      "play-again-button"
    )[0] as HTMLButtonElement;
    playAgainButtonElement.addEventListener("click", () => {
      this.handlePlayAgain();
    });
  }

  initEventListeners() {
    const formElement = document.getElementsByClassName(
      "form-element"
    )[0] as HTMLDivElement;

    formElement.addEventListener("click", (e: Event) => {
      this.handleOptionSelect(e);
    });
  }

  handlePlayAgain() {
    commonHTMLElements.analysisElement.style.display = "none";
    commonHTMLElements.questionsElement.style.display = "block";
    induceMainQuizForm(commonHTMLElements.mainQuizFormElement, 1, 1);

    this.handleDataDisplay(
      commonHTMLElements.analysisSectionElement,
      commonHTMLElements.mainQuizFormElement
    );
    this.initEventListeners();
  }

  handleOptionSelect(e: Event) {
    if (this.index % 2 === 0 && "value" in e.target!) {
      this.selectedAnswerPlayer1 = e.target.value as string;
    } else {
      if ("value" in e.target!) {
        this.selectedAnswerPlayer2 = e.target.value as string;
      }
    }
  }

  handleSetTimeOutCode(
    i: number,
    mainQuizFormElement: HTMLDivElement,
    analysisSectionElement: HTMLDivElement
  ) {
    this.index = i;
    if (i % 2 === 0) {
      induceMainQuizForm(mainQuizFormElement, this.questionPlayer1, 1);
      this.questionPlayer1++;
      this.handleAnalysisObjectUpdationPlayer2(this.questionPlayer2);
      this.selectedAnswerPlayer2 = "";
    } else {
      induceMainQuizForm(mainQuizFormElement, this.questionPlayer2, 2);
      this.questionPlayer2++;
      this.handleAnalysisObjectUpdationPlayer1(this.questionPlayer1);
      this.selectedAnswerPlayer1 = "";
    }
    this.initEventListeners();
    let timer = 10;
    let interval = setInterval(() => {
      if (timer === 1) clearInterval(interval);
      timer--;

      i % 2 === 0
        ? induceAnalysisSection(analysisSectionElement, 1, timer)
        : induceAnalysisSection(analysisSectionElement, 2, timer);
    }, 1000);
  }

  handleAnalysisObjectUpdationPlayer1(questionPlayer1: number) {
    if (this.selectedAnswerPlayer1 === "") {
      player1Analysis.unansweredQuestions += 1;
    } else if (
      this.selectedAnswerPlayer1 === player1[questionPlayer1 - 2].correct_answer
    ) {
      player1Analysis.CorrectlyAnswered += 1;
    } else {
      player1Analysis.incorrectQuestions += 1;
    }
    localStorage.setItem("player1Analysis", JSON.stringify(player1Analysis));
  }

  handleAnalysisObjectUpdationPlayer2(questionPlayer2: number) {
    if (this.selectedAnswerPlayer2 === "") {
      player2Analysis.unansweredQuestions += 1;
    } else if (
      this.selectedAnswerPlayer2 === player2[questionPlayer2 - 2].correct_answer
    ) {
      player2Analysis.CorrectlyAnswered += 1;
    } else {
      player2Analysis.incorrectQuestions += 1;
    }

    localStorage.setItem("player2Analysis", JSON.stringify(player2Analysis));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new quizApplication();
});
