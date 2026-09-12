(() => {
  document.documentElement.classList.add('js');

  const controls = [...document.querySelectorAll('[data-publication-view]')];
  const fullOnly = [...document.querySelectorAll('[data-publication="full"]')];
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function setPublicationView(view) {
    const showFull = view === 'full';
    fullOnly.forEach((publication) => {
      publication.hidden = !showFull;
    });
    controls.forEach((control) => {
      const active = control.dataset.publicationView === view;
      control.classList.toggle('active', active);
      control.setAttribute('aria-pressed', String(active));
    });
  }

  controls.forEach((control) => {
    control.addEventListener('click', () => setPublicationView(control.dataset.publicationView));
  });

  function closeNavigation({ restoreFocus = false } = {}) {
    if (!navToggle || !navLinks) return;
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) navToggle.focus();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') !== 'true';
      navLinks.classList.toggle('open', open);
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeNavigation();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeNavigation({ restoreFocus: true });
      }
    });
  }
})();
