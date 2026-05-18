import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa6';
import { SiGit, SiPostgresql, SiReact, SiSpringboot } from 'react-icons/si';
import TechBadge from './TechBadge';

const iconMap = {
  backend: { Icon: SiSpringboot, color: 'text-accent', glow: 'shadow-accent/20' },
  database: { Icon: SiPostgresql, color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  cloud: { Icon: FaAws, color: 'text-amber-400', glow: 'shadow-amber-500/20' },
  frontend: { Icon: SiReact, color: 'text-secondary', glow: 'shadow-secondary/20' },
  tools: { Icon: SiGit, color: 'text-pink-400', glow: 'shadow-pink-500/20' },
};

const isAwsItem = (name) => name.startsWith('AWS ');

export default function SkillCategoryCard({ categoryKey, category, index }) {
  const meta = iconMap[categoryKey] ?? iconMap.backend;
  const { Icon } = meta;

  const header = (
    <motion.div className="relative mb-5 flex items-start gap-4">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl ${meta.color} shadow-lg ${meta.glow}`}
      >
        <Icon aria-hidden />
      </span>
      <motion.div>
        <h3 className="font-display text-lg font-semibold text-white">{category.label}</h3>
        <p className="mt-0.5 text-xs text-text/55">{category.tagline}</p>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.article
      className="glass group relative h-full overflow-hidden rounded-2xl border border-white/10 p-6 transition duration-500 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition group-hover:bg-accent/10"
        aria-hidden
      />
      {header}
      <motion.div className="relative flex flex-wrap gap-2">
        {category.items.map((item, i) => (
          <TechBadge
            key={item}
            label={item}
            index={i}
            variant={
              categoryKey === 'cloud' && isAwsItem(item)
                ? 'aws'
                : item === 'Query Optimization'
                  ? 'featured'
                  : 'default'
            }
          />
        ))}
      </motion.div>
    </motion.article>
  );
}
