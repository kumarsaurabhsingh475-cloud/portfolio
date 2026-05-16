import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { navLinks, personal } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/scrollTo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-bg/80 py-12">
      <div className="section-padding !py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-lg font-bold text-white">{personal.name}</p>
            <p className="mt-1 text-sm text-text/60">{personal.title}</p>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.slice(0, 5).map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-text/60 transition hover:text-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="rounded-lg p-2 text-text/60 transition hover:bg-white/5 hover:text-accent"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-text/60 transition hover:bg-white/5 hover:text-accent"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-text/60 transition hover:bg-white/5 hover:text-accent"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-sm text-text/70 transition hover:border-accent/40 hover:text-accent"
            >
              <FiArrowUp /> Top
            </button>
          </div>
        </div>

        <p className="mt-10 text-center font-mono text-xs text-text/40">
          © {year} {personal.name}. Crafted with React & Spring spirit.
        </p>
      </div>
    </footer>
  );
}
