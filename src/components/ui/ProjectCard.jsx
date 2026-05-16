import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { fadeUp } from '../../animations/variants';

export default function ProjectCard({ project, index }) {
  const hasAppUrl = project.appUrl && project.appUrl !== '#';

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
      <motion.div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]" />
        <span className="font-mono text-5xl font-bold text-white/10">{project.title.charAt(0)}</span>
        <motion.div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-bg/80 to-transparent" />
      </motion.div>

      <motion.div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-accent/90">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text/70">{project.description}</p>
        <motion.div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-text/80"
            >
              {t}
            </span>
          ))}
        </motion.div>
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
      </motion.div>
    </motion.article>
  );
}
