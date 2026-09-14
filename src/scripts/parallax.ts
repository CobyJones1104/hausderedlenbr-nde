/**
 * Scroll-linked parallax drift for images marked [data-parallax].
 *
 * Deliberately direct: no easing, no transition, no spring — the offset is
 * a 1:1 function of scroll position, recomputed every frame while an
 * element is near the viewport. Adding a CSS transition here would make
 * the image visibly lag behind the user's own scroll input, which reads
 * as broken rather than smooth. Only `transform` is touched (GPU-only,
 * no layout/paint), and an IntersectionObserver keeps offscreen images
 * out of the per-frame work entirely.
 */
const SPEED = 0.12; // fraction of an element's distance from viewport-center
const MAX_OFFSET = 20; // px — stays inside the 14% scale headroom in CSS

function initParallax(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = Array.from(
    document.querySelectorAll<HTMLElement>('[data-parallax] > img, [data-parallax] > video')
  );
  if (!targets.length) return;

  const active = new Set<HTMLElement>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) active.add(el);
        else active.delete(el);
      }
    },
    { rootMargin: '25% 0px 25% 0px' }
  );
  targets.forEach((el) => observer.observe(el));

  let ticking = false;

  function update(): void {
    ticking = false;
    const viewportCenter = window.innerHeight / 2;
    active.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const offset = Math.max(
        -MAX_OFFSET,
        Math.min(MAX_OFFSET, (viewportCenter - elementCenter) * SPEED)
      );
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.14)`;
    });
  }

  function onScroll(): void {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallax);
} else {
  initParallax();
}
