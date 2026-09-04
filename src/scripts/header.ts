/** Sticky header scroll state + accessible mobile nav toggle. */
function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-nav-panel]');
  if (!toggle || !panel) return;

  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };
  const openNav = () => {
    toggle.setAttribute('aria-expanded', 'true');
    panel.classList.add('is-open');
    document.body.classList.add('nav-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeNav() : openNav();
  });

  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}
