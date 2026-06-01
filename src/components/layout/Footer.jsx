import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import ProfileViewCount from '../ui/ProfileViewCount';
import { navLinks, personal } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/scrollTo';

const socialLinks = [
  { href: `mailto:${personal.email}`, icon: FiMail, label: 'Email' },
  { href: personal.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: personal.github, icon: FiGithub, label: 'GitHub' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-bg/90">
      <div className="section-padding !py-10 md:!py-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] lg:gap-8">
          <motion.div
            className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="font-display text-lg font-bold text-white">{personal.name}</p>
              <p className="mt-1 text-sm text-text/60">{personal.title}</p>
            </div>
            <ProfileViewCount variant="compact" />
          </motion.div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-center lg:self-center"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
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

          <div className="flex items-center justify-center gap-1 lg:justify-end lg:self-center">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="rounded-lg p-2.5 text-text/60 transition hover:bg-white/5 hover:text-accent"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-text/45">
            © {year} {personal.name}
          </p>
          <p className="font-mono text-xs text-text/40">Built with React and Vite</p>
        </div>
      </div>
    </footer>
  );
}
