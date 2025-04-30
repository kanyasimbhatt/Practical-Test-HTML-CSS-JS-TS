import { induceNavbar } from "../Navbar/navbar";
import { induceMainQuizForm } from "../qiuzForm/quizForm";

document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementsByClassName("navbar-div")[0];
  const mainQuizFormElement =
    document.getElementsByClassName("quiz-timer-form")[0];

  induceNavbar(navbarElement);
  induceMainQuizForm(mainQuizFormElement);
});
