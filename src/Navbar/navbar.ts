export function induceNavbar(navbarElement) {
  navbarElement.innerHTML += `
  <div class = 'navbar-logo-div'>
    <img src="https://play-lh.googleusercontent.com/VpIV5wjUERZ-dTZxuIyiqv8XkZqbcgQTxqNJnwCcszLPGezPUEY-PSTxKySq-qhf" alt="Quiz application logo" class="navbar-logo" />
  
  <h1 class = "navbar-title">Quizzy</h1>
  </div>
  <div class = 'navbar-buttons'>
    <button class = 'save-progress'>Save Progress </button>
    <button class = 'resume-progress'>Resume Progress</button>
  </div>
    `;
}
