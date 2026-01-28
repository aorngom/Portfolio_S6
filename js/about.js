// about.js
// - met l'année à jour
// - reveal simple (si tu veux l'effet d'apparition)
(() => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
  
    els.forEach(el => io.observe(el));
  })();
  