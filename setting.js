document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";  // Redirection vers la page d'accueil
  });
  
  let meilleurEn = 3;
  let partieEn = 2;
  let firstTeam = "";
  let secondTeam = "";
  
  document.getElementById("firstTeam").addEventListener("input", (e) => {
    firstTeam = e.target.value;
  });
  
  document.getElementById("secondTeam").addEventListener("input", (e) => {
    secondTeam = e.target.value;
  });
  
  document.getElementById("incrementMeilleurEn").addEventListener("click", () => {
    meilleurEn++;
    document.getElementById("meilleurEn").textContent = meilleurEn;
  });
  
  document.getElementById("decrementMeilleurEn").addEventListener("click", () => {
    if (meilleurEn > 1) {
      meilleurEn--;
      document.getElementById("meilleurEn").textContent = meilleurEn;
    }
  });
  
  document.getElementById("incrementPartieEn").addEventListener("click", () => {
    partieEn++;
    document.getElementById("partieEn").textContent = partieEn;
  });
  
  document.getElementById("decrementPartieEn").addEventListener("click", () => {
    if (partieEn > 1) {
      partieEn--;
      document.getElementById("partieEn").textContent = partieEn;
    }
  });
  
  document.getElementById("startGame").addEventListener("click", () => {
    localStorage.setItem("firstTeam", firstTeam);
    localStorage.setItem("secondTeam", secondTeam);
    localStorage.setItem("meilleurEn", meilleurEn);
    localStorage.setItem("partieEn", partieEn);
    window.location.href = "play.html";  // Redirection vers la page de jeu
  });
  