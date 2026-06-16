/* ===== Academic Personal Website — JavaScript ===== */
(function () {
  'use strict';

  const html = document.documentElement;
  let currentLang = localStorage.getItem('site-lang') || 'en';

  /* ===== Language Switching ===== */
  function setLanguage(lang) {
    currentLang = lang;
    html.setAttribute('data-lang', lang);
    localStorage.setItem('site-lang', lang);

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // Init language
  setLanguage(currentLang);

  // Bind buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.dataset.lang);
    });
  });

  /* ===== Mobile Sidebar ===== */
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
      });
    }
  }

  // Close sidebar when a nav link is clicked (mobile)
  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
    });
  });

  /* ===== Active Nav Link on Scroll ===== */
  var sections = document.querySelectorAll('.section[id]');
  var navLinks = document.querySelectorAll('.sidebar-nav a');

  function updateActiveLink() {
    var scrollPos = window.scrollY + 100;

    var currentSection = null;
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentSection = section;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (currentSection && link.getAttribute('href') === '#' + currentSection.id) {
        link.classList.add('active');
      }
    });
  }

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink(); // initial call
  }
})();
