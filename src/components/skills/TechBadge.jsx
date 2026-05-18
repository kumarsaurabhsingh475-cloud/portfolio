import { motion } from 'framer-motion';

const accentMap = {
  default: 'hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]',
  aws: 'hover:border-amber-400/50 hover:text-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.2)]',
  featured:
    'border-accent/30 bg-accent/10 text-accent shadow-[0_0_16px_rgba(56,189,248,0.12)]',
};

export default function TechBadge({ label, variant = 'default', index = 0 }) {
  const styles = accentMap[variant] ?? accentMap.default;

  return (
    <motion.span
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs font-medium text-text/85 backdrop-blur-sm transition-colors duration-300 ${styles} ${
        variant === 'featured' ? accentMap.featured : ''
      }`}
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.03 }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(56,189,248,0.08) 50%, transparent 60%)',
        }}
        aria-hidden
      />
      <span className="relative h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60 group-hover:bg-accent group-hover:shadow-[0_0_8px_#38bdf8]" />
      <span className="relative">{label}</span>
    </motion.span>
  );
}
