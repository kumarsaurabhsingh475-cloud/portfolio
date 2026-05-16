import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa6';
import {
  SiAngular,
  SiBitbucket,
  SiDocker,
  SiGit,
  SiGraphql,
  SiIntellijidea,
  SiJira,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpringboot,
} from 'react-icons/si';
import { staggerContainer } from '../animations/variants';
import GlassCard from '../components/ui/GlassCard';
import SectionHeading from '../components/ui/SectionHeading';
import SkillBar from '../components/ui/SkillBar';
import { skills } from '../data/portfolioData';

const categoryMeta = {
  backend: { label: 'Backend', icon: SiSpringboot, color: 'text-accent' },
  frontend: { label: 'Frontend', icon: SiReact, color: 'text-secondary' },
  database: { label: 'Database', icon: SiPostgresql, color: 'text-emerald-400' },
  cloud: { label: 'Cloud / DevOps', icon: FaAws, color: 'text-amber-400' },
  tools: { label: 'Tools', icon: SiGit, color: 'text-pink-400' },
};

const techIcons = [
  { Icon: SiSpringboot, id: 'spring' },
  { Icon: SiJavascript, id: 'js' },
  { Icon: SiGraphql, id: 'graphql' },
  { Icon: SiAngular, id: 'angular' },
  { Icon: SiReact, id: 'react' },
  { Icon: SiRedis, id: 'redis' },
  { Icon: SiPostgresql, id: 'postgres' },
  { Icon: FaAws, id: 'aws' },
  { Icon: SiDocker, id: 'docker' },
  { Icon: SiIntellijidea, id: 'idea' },
  { Icon: SiGit, id: 'git' },
  { Icon: SiBitbucket, id: 'bitbucket' },
  { Icon: SiJira, id: 'jira' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-padding">
        <SectionHeading
          tag="Skills"
          title="Technical Arsenal"
          subtitle="Proficiency across the backend stack and the tools that power production delivery."
        />

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {techIcons.map(({ Icon, id }, i) => (
            <motion.span
              key={id}
              className="glass rounded-xl p-3 text-2xl text-text/70 transition hover:text-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              whileHover={{ scale: 1.15, y: -4 }}
              transition={{ delay: i * 0.03 }}
            >
              <Icon aria-hidden />
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {Object.entries(skills).map(([key, items]) => {
            const meta = categoryMeta[key];
            const Icon = meta.icon;
            return (
              <GlassCard key={key} className="h-full">
                <div className="mb-6 flex items-center gap-3">
                  <span className={`rounded-lg bg-white/5 p-2 text-2xl ${meta.color}`}>
                    <Icon />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{meta.label}</h3>
                </div>
                <div className="space-y-4">
                  {items.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={i * 0.05} />
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
