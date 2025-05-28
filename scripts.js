document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Mobile Menu Toggle
  // =========================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // =========================
  // Resources Dropdown Toggle
  // =========================
  const resourcesBtn = document.querySelector('button[aria-haspopup="true"]');
  const resourcesMenu = document.getElementById("resources-menu");

  if (resourcesBtn && resourcesMenu) {
    resourcesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = resourcesBtn.getAttribute("aria-expanded") === "true";
      resourcesBtn.setAttribute("aria-expanded", !expanded);
      resourcesMenu.style.display = expanded ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
      if (!resourcesBtn.contains(e.target) && !resourcesMenu.contains(e.target)) {
        resourcesBtn.setAttribute("aria-expanded", "false");
        resourcesMenu.style.display = "none";
      }
    });

    resourcesBtn.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        resourcesBtn.setAttribute("aria-expanded", "false");
        resourcesMenu.style.display = "none";
      }
    });
  }

  // =========================
  // Smooth Scroll for Anchor Links
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // =========================
  // FAQ Toggle
  // =========================
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item");
      if (faqItem) {
        faqItem.classList.toggle("open");
      }
    });
  });

  // =========================
  // Video Modal Handling
  // =========================
  const cards = document.querySelectorAll(".feature-card[data-video]");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  cards.forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const videoURL = card.getAttribute("data-video");
      iframe.src = `${videoURL}?autoplay=1`;
      modal.classList.remove("hidden");
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.add("hidden");
    iframe.src = "";
  }
});
