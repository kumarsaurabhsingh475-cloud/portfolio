import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { fadeUp } from '../../animations/variants';

function buildBannerSources(project) {
  const list = [
    project.bannerImage,
    ...(project.bannerSources ?? []),
    project.bannerFallback,
  ].filter(Boolean);
  return [...new Set(list)];
}

/** Fixed box — logos scale UP to fill it (max-* alone does not enlarge small SVGs) */
const LOGO_BOX = {
  'brand-wide': { height: '5.5rem', width: '90%' },
  compact: { height: '5.5rem', width: '78%' },
  emblem: { height: '5.5rem', width: '90%' },
};

export default function ProjectCard({ project, index }) {
  const hasAppUrl = project.appUrl && project.appUrl !== '#';
  const sources = useMemo(() => buildBannerSources(project), [project]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const bannerFailed = sourceIndex >= sources.length;
  const activeSrc = sources[sourceIndex];
  const logoProfile = project.bannerLogoProfile ?? 'brand-wide';
  const logoBox = LOGO_BOX[logoProfile] ?? LOGO_BOX['brand-wide'];

  const handleBannerError = () => {
    setSourceIndex((i) => i + 1);
  };

  return (
    <motion.article
      className="group glass neon-border flex h-full flex-col overflow-hidden rounded-2xl"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{
        rotateX: 2,
        rotateY: -2,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-bg/90 sm:h-52 ${
          !bannerFailed ? '' : `bg-gradient-to-br ${project.gradient}`
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_55%)]" />

        {!bannerFailed ? (
          <div
            className="relative z-10 flex shrink-0 items-center justify-center transition duration-300 group-hover:scale-[1.02]"
            style={{ height: logoBox.height, width: logoBox.width, maxWidth: '20rem' }}
          >
            <img
              key={activeSrc}
              src={activeSrc}
              alt={`${project.title} logo`}
              className="h-full w-full object-contain object-center"
              loading="lazy"
              onError={handleBannerError}
            />
          </div>
        ) : (
          <span className="relative z-10 font-mono text-5xl font-bold text-white/10">
            {project.title.charAt(0)}
          </span>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-accent/90">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text/70">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-text/80"
            >
              {t}
            </span>
          ))}
        </div>
        {hasAppUrl && (
          <motion.a
            href={project.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent/10 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Open ${project.title} app`}
          >
            <FiExternalLink />
            Open App
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
