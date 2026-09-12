(() => {
  document.documentElement.classList.add('js');

  const controls = [...document.querySelectorAll('[data-publication-view]')];
  const publications = [...document.querySelectorAll('.publication-container[data-tags]')];
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const bibtexModal = document.querySelector('#bibtex-modal');
  const bibtexTitle = document.querySelector('#bibtex-title');
  const bibtexContent = document.querySelector('#bibtex-content');
  const bibtexStatus = document.querySelector('#bibtex-status');
  const bibtexClose = document.querySelector('.bibtex-close');
  const bibtexCopy = document.querySelector('.bibtex-copy-btn');
  const bibtexDownload = document.querySelector('.bibtex-download-btn');
  const bibtexTriggers = [...document.querySelectorAll('.bibtex-trigger')];
  let activeBibtexTrigger = null;
  let activeBibtexFilename = '';
  let copyResetTimer = null;

  function setPublicationView(view) {
    publications.forEach((publication) => {
      const tags = publication.dataset.tags.split(/\s+/);
      publication.hidden = view !== 'selected' && !tags.includes(view);
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

  function setBibtexStatus(message) {
    if (bibtexStatus) bibtexStatus.textContent = message;
  }

  function closeBibtex() {
    if (!bibtexModal || bibtexModal.hidden) return;
    bibtexModal.hidden = true;
    document.body.classList.remove('modal-open');
    setBibtexStatus('');
    if (activeBibtexTrigger) activeBibtexTrigger.focus();
  }

  async function openBibtex(trigger) {
    if (!bibtexModal || !bibtexTitle || !bibtexContent || !bibtexClose) return;
    if (copyResetTimer) window.clearTimeout(copyResetTimer);
    bibtexCopy?.classList.remove('copy-success');
    if (bibtexCopy) bibtexCopy.textContent = 'Copy';
    activeBibtexTrigger = trigger;
    activeBibtexFilename = trigger.dataset.bibtex.split('/').pop();
    bibtexTitle.textContent = trigger.dataset.title || 'BibTeX Citation';
    bibtexContent.textContent = 'Loading…';
    setBibtexStatus('');
    bibtexModal.hidden = false;
    document.body.classList.add('modal-open');
    bibtexClose.focus();

    try {
      const response = await fetch(trigger.dataset.bibtex, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      bibtexContent.textContent = (await response.text()).trim();
    } catch (error) {
      bibtexContent.textContent = '';
      setBibtexStatus('Unable to load this citation. Please try again.');
    }
  }

  async function copyBibtex() {
    const citation = bibtexContent?.textContent || '';
    if (!citation) return;
    try {
      await navigator.clipboard.writeText(citation);
      bibtexCopy.classList.add('copy-success');
      bibtexCopy.textContent = 'Copied';
      setBibtexStatus('Citation copied to clipboard.');
      copyResetTimer = window.setTimeout(() => {
        bibtexCopy.classList.remove('copy-success');
        bibtexCopy.textContent = 'Copy';
        copyResetTimer = null;
      }, 1800);
    } catch (error) {
      setBibtexStatus('Copy failed. Select the citation text and copy it manually.');
      bibtexContent.focus();
      window.getSelection()?.selectAllChildren(bibtexContent);
    }
  }

  function downloadBibtex() {
    const citation = bibtexContent?.textContent || '';
    if (!citation || !activeBibtexFilename) return;
    const objectUrl = URL.createObjectURL(new Blob([`${citation}\n`], { type: 'application/x-bibtex' }));
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = activeBibtexFilename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
    setBibtexStatus(`Downloading ${activeBibtexFilename}.`);
  }

  bibtexTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openBibtex(trigger));
  });
  bibtexClose?.addEventListener('click', closeBibtex);
  bibtexCopy?.addEventListener('click', copyBibtex);
  bibtexDownload?.addEventListener('click', downloadBibtex);
  bibtexModal?.addEventListener('click', (event) => {
    if (event.target === bibtexModal) closeBibtex();
  });
  bibtexModal?.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...bibtexModal.querySelectorAll('button,[tabindex="0"]')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && bibtexModal && !bibtexModal.hidden) closeBibtex();
  });
})();
