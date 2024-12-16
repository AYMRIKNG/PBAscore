const firstTeam = localStorage.getItem("firstTeam");
const secondTeam = localStorage.getItem("secondTeam");
const meilleurEn = parseInt(localStorage.getItem("meilleurEn"));
const partieEn = parseInt(localStorage.getItem("partieEn"));

let scoreMatch1 = 0;
let scoreMatch2 = 0;
let scorePartie1 = 0;
let scorePartie2 = 0;

document.getElementById("team1Name").textContent = firstTeam;
document.getElementById("team2Name").textContent = secondTeam;
document.getElementById("scoreMatch1").textContent = scoreMatch1;
document.getElementById("scoreMatch2").textContent = scoreMatch2;
document.getElementById("scorePartie1").textContent = scorePartie1;
document.getElementById("scorePartie2").textContent = scorePartie2;

document.querySelectorAll(".scoreButton").forEach(button => {
  button.addEventListener("click", () => {
    const team = button.getAttribute("data-team");
    const score = parseInt(button.getAttribute("data-score"));
    
    if (team === "1") {
      scorePartie1 += score;
      document.getElementById("scorePartie1").textContent = scorePartie1;
    } else {
      scorePartie2 += score;
      document.getElementById("scorePartie2").textContent = scorePartie2;
    }

    if (scorePartie1 >= partieEn) {
      scoreMatch1++;
      scorePartie1 = 0;
      scorePartie2 = 0;
      document.getElementById("scoreMatch1").textContent = scoreMatch1;
    } else if (scorePartie2 >= partieEn) {
      scoreMatch2++;
      scorePartie1 = 0;
      scorePartie2 = 0;
      document.getElementById("scoreMatch2").textContent = scoreMatch2;
    }
  });
});

document.getElementById("resetScores").addEventListener("click", () => {
  scoreMatch1 = 0;
  scoreMatch2 = 0;
  scorePartie1 = 0;
  scorePartie2 = 0;
  document.getElementById("scoreMatch1").textContent = scoreMatch1;
  document.getElementById("scoreMatch2").textContent = scoreMatch2;
  document.getElementById("scorePartie1").textContent = scorePartie1;
  document.getElementById("scorePartie2").textContent = scorePartie2;
});

document.getElementById("endGame").addEventListener("click", () => {
  window.location.href = "index.html";  // Fin du jeu, retour à l'accueil
});
