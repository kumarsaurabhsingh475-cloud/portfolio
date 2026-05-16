import { motion } from 'framer-motion';

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-text/90 group-hover:text-accent transition-colors">
          {name}
        </span>
        <span className="font-mono text-accent/80">{level}%</span>
      </motion.div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary shadow-[0_0_12px_rgba(56,189,248,0.4)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
