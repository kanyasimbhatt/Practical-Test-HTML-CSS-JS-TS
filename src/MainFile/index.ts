import { induceNavbar } from "../Navbar/navbar";

document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementsByClassName("navbar-div")[0];
  induceNavbar(navbarElement);
});
