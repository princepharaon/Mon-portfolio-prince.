/* ============================================================
   PORTFOLIO — Script principal
   Description : menu mobile, en-tête au défilement,
                 animations d'apparition, année du footer.
   ============================================================ */

/* -------- 1. MENU MOBILE (hamburger) -------- */
// On récupère le bouton hamburger et le menu de navigation
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

// Quand on clique sur le hamburger, on ouvre/ferme le menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");     // ouvre/ferme le menu
  navToggle.classList.toggle("active"); // transforme le hamburger en croix
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("active");
  });
});

/* -------- 2. EN-TÊTE OPAQUE AU DÉFILEMENT -------- */
const header = document.getElementById("header");

// On écoute le défilement de la page
window.addEventListener("scroll", () => {
  // Si on a défilé de plus de 60px, on rend l'en-tête opaque
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* -------- 3. ANIMATIONS D'APPARITION -------- */
// On récupère tous les éléments marqués avec data-animate
const animatedElements = document.querySelectorAll("[data-animate]");

// On crée un "observateur" qui détecte quand un élément entre à l'écran
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Si l'élément est visible, on lui ajoute la classe "visible"
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // on arrête de l'observer
      }
    });
  },
  { threshold: 0.15 } // déclenche quand 15% de l'élément est visible
);

// On demande à l'observateur de surveiller chaque élément
animatedElements.forEach((el) => observer.observe(el));

/* -------- 4. ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE -------- */
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
