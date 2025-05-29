document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Mobile Menu Toggle (ID-based)
  // =========================
  const navToggle = document.getElementById('nav-toggle');
  const navLinksId = document.getElementById('nav-links');
  const hamburger = navToggle ? navToggle.querySelector('.hamburger') : null;
  if (navToggle && navLinksId && hamburger) {
    navToggle.addEventListener('click', function () {
      navLinksId.classList.toggle('open');
      hamburger.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinksId.classList.contains('open'));
    });

    // Close menu when clicking outside or pressing Escape
    document.addEventListener('click', function (e) {
      if (!navLinksId.contains(e.target) && !navToggle.contains(e.target)) {
        navLinksId.classList.remove('open');
        hamburger.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        navLinksId.classList.remove('open');
        hamburger.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================
  // Smooth Scroll for Anchor Links
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
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

  if (cards && modal && iframe) {
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
  }

  // =========================
  // Fade-in on scroll for text boxes and sections
  // =========================
  const faders = document.querySelectorAll('.fade-in-on-scroll');
  const options = { threshold: 0.15 };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once only
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});