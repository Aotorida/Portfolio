// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Filtres de la page projets
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tag = btn.dataset.filter;
    filters.forEach((b) => b.setAttribute("aria-pressed", b === btn));
    projects.forEach((p) => {
      p.hidden = tag !== "all" && !p.dataset.tags.split(" ").includes(tag);
    });
  });
});

document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
