(() => {
  const controls = [...document.querySelectorAll('[data-publication-view]')];
  const fullOnly = [...document.querySelectorAll('[data-publication="full"]')];

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
})();
