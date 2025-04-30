import { induceNavbar } from "../Navbar/navbar";
import { induceMainQuizForm } from "../qiuzForm/quizForm";

document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementsByClassName("navbar-div")[0];
  const mainQuizFormElement =
    document.getElementsByClassName("quiz-timer-form")[0];

  induceNavbar(navbarElement);

  let timer = 10;
  let interval = setInterval(() => {
    if (timer === 1) clearInterval(interval);
    timer--;
    induceMainQuizForm(mainQuizFormElement, 1, 1, timer);
  }, 1000);
});
