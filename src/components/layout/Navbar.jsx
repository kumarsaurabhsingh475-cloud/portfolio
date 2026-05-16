import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personal } from '../../data/portfolioData';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { scrollToSection } from '../../utils/scrollTo';
import { SECTION_IDS } from '../../utils/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label="Go to home"
        >
          <span className="text-gradient">{personal.name.split(' ')[0]}</span>
          <span className="text-accent">.</span>
        </button>

        {!isMobile && (
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    activeId === link.id
                      ? 'text-accent bg-accent/10'
                      : 'text-text/70 hover:text-accent hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <motion.div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="hidden text-text/70 transition hover:text-accent sm:block"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-text/70 transition hover:text-accent sm:block"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-text/70 transition hover:text-accent sm:block"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          {isMobile && (
            <button
              type="button"
              className="rounded-lg p-2 text-text hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          )}
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium ${
                      activeId === link.id ? 'bg-accent/10 text-accent' : 'text-text/80'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex justify-center gap-6 border-t border-white/10 pt-4">
                <a href={`mailto:${personal.email}`} aria-label="Email">
                  <FiMail />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
