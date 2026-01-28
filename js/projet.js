// projet.js (optionnel)
// - duplique le contenu du marquee pour un scroll infini propre
// - met l'année automatiquement si tu veux
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".track").forEach(track => {
    // Si déjà dupliqué, on évite de refaire.
    if (track.dataset.cloned === "1") return;

    const clone = track.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.parentElement.appendChild(clone);

    // On marque les deux comme “cloned” pour éviter la duplication multiple
    track.dataset.cloned = "1";
    clone.dataset.cloned = "1";
  });
});
