/**
 * Scroll-reveal system. Applies `.is-revealed` to any [data-reveal] element,
 * and staggers direct children of [data-stagger] containers via an
 * incrementing --reveal-delay custom property.
 */
const STAGGER_STEP_MS = 80;

function initReveal(): void {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      (child as HTMLElement).style.setProperty('--reveal-delay', `${i * STAGGER_STEP_MS}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
