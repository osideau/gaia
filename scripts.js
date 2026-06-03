/* ─── SVG Icon Library ─────────────────────────────────── */
const ICONS = {
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 22V12M12 12C12 7 17 3 21 3C21 8 18 13 12 12Z M12 12C12 7 7 3 3 3C3 8 6 13 12 12Z"/></svg>`,
  wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 12c1.5-2 3-3 4.5-3s3 2 4.5 2 3-2 4.5-2 3 1.5 4.5 3"/><path d="M2 17c1.5-2 3-3 4.5-3s3 2 4.5 2 3-2 4.5-2 3 1.5 4.5 3"/><path d="M2 7c1.5-2 3-3 4.5-3s3 2 4.5 2 3-2 4.5-2 3 1.5 4.5 3"/></svg>`,
  walk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="13" cy="4" r="1.5"/><path d="M9 9l2-2 2 1 1 3M9 9l-2 5 2 1M13 13l1 4-2 1M11 17l1 3"/></svg>`,
  grow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 22v-8M12 14c0-4 3-8 7-10M12 14c0-4-3-8-7-10M12 14c0-2 1-5 4-7M12 14c0-2-1-5-4-7"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  gaia: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="20" cy="20" r="10"/><path d="M20 10C20 10 16 15 16 20C16 25 20 28 20 28"/><path d="M20 10C20 10 24 15 24 20C24 25 20 28 20 28"/><path d="M10.5 16H29.5M10.5 24H29.5"/></svg>`
};

/* ─── Reveal on scroll ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
});
