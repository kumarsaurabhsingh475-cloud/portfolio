const NAV_OFFSET = 88;

/** Smooth scroll to a section by element id (mobile-safe, accounts for fixed header) */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;

  try {
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  } catch {
    window.scrollTo(0, Math.max(0, top));
  }
}
