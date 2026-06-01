import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { useProfileViewCount } from '../../hooks/useProfileViewCount';

export default function ProfileViewCount({ className = '', variant = 'default' }) {
  const views = useProfileViewCount();
  const display = views === null ? '…' : views.toLocaleString('en-IN');

  if (variant === 'compact') {
    return (
      <motion.div
        className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        aria-label={`Profile viewed ${display} times`}
      >
        <FiEye className="shrink-0 text-sm text-accent" aria-hidden />
        <span className="font-mono text-[11px] text-text/55">Profile views</span>
        <span className="font-display text-sm font-semibold tabular-nums text-accent">{display}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`glass flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 ${className}`}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-label={`Profile viewed ${display} times`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <FiEye className="text-base" aria-hidden />
      </span>
      <div className="text-left leading-tight">
        <p className="font-mono text-[10px] uppercase tracking-wider text-text/50">Profile views</p>
        <p className="font-display text-lg font-bold tabular-nums text-white">{display}</p>
      </div>
    </motion.div>
  );
}
