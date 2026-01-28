document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     REVEAL (affiche tout)
     ========================= */
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    el.classList.add("is-visible");
  });

  /* =========================
     TABS (portfolio)
     ========================= */
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  function showPanel(name) {
    panels.forEach(panel => {
      if (panel.dataset.panel === name) {
        panel.classList.add("is-active");
      } else {
        panel.classList.remove("is-active");
      }
    });

    tabs.forEach(tab => {
      if (tab.dataset.tab === name) {
        tab.classList.add("is-active");
      } else {
        tab.classList.remove("is-active");
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      showPanel(tab.dataset.tab);
    });
  });

  // afficher "projects" au chargement
  showPanel("projects");
});
