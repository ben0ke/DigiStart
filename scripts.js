document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Dropdown (Resources) Functionality
  const resourcesBtn = document.querySelector('button[aria-haspopup="true"]');
  const resourcesMenu = document.getElementById('resources-menu');
  if (resourcesBtn && resourcesMenu) {
    resourcesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = resourcesBtn.getAttribute('aria-expanded') === 'true';
      resourcesBtn.setAttribute('aria-expanded', !expanded);
      resourcesMenu.style.display = expanded ? 'none' : 'block';
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!resourcesBtn.contains(e.target) && !resourcesMenu.contains(e.target)) {
        resourcesBtn.setAttribute('aria-expanded', 'false');
        resourcesMenu.style.display = 'none';
      }
    });
    // Keyboard support
    resourcesBtn.addEventListener('keyup', (e) => {
      if (e.key === "Escape") {
        resourcesBtn.setAttribute('aria-expanded', 'false');
        resourcesMenu.style.display = 'none';
      }
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FAQ Accordion (if present)
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      if (faqItem) {
        faqItem.classList.toggle('open');
        // Optionally close others
        // document.querySelectorAll('.faq-item').forEach(item => {
        //   if (item !== faqItem) item.classList.remove('open');
        // });
      }
    });
  });
});
