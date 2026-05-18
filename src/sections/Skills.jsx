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
import AwsServicesStrip from '../components/skills/AwsServicesStrip';
import SkillCategoryCard from '../components/skills/SkillCategoryCard';
import SectionHeading from '../components/ui/SectionHeading';
import { skillCategories } from '../data/portfolioData';

const stackIcons = [
  { Icon: SiSpringboot, id: 'spring', label: 'Spring' },
  { Icon: FaAws, id: 'aws', label: 'AWS' },
  { Icon: SiPostgresql, id: 'postgres', label: 'PostgreSQL' },
  { Icon: SiGraphql, id: 'graphql', label: 'GraphQL' },
  { Icon: SiRedis, id: 'redis', label: 'Redis' },
  { Icon: SiDocker, id: 'docker', label: 'Docker' },
  { Icon: SiGit, id: 'git', label: 'Git' },
  { Icon: SiBitbucket, id: 'bitbucket', label: 'Bitbucket' },
  { Icon: SiJira, id: 'jira', label: 'Jira' },
  { Icon: SiJavascript, id: 'js', label: 'JS' },
  { Icon: SiAngular, id: 'angular', label: 'Angular' },
  { Icon: SiReact, id: 'react', label: 'React' },
  { Icon: SiIntellijidea, id: 'idea', label: 'IntelliJ' },
];

const categoryOrder = ['backend', 'database', 'cloud', 'tools', 'frontend'];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <motion.div className="section-padding">
        <SectionHeading
          tag="Tech Stack"
          title="Engineering Stack"
          subtitle="Production backend systems — JVM services, data layers, AWS cloud primitives, and the tooling that ships reliable SaaS."
        />

        <AwsServicesStrip />

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stackIcons.map(({ Icon, id, label }, i) => (
            <motion.div
              key={id}
              className="group flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <span className="glass flex h-12 w-12 items-center justify-center rounded-xl text-xl text-text/70 transition duration-300 group-hover:border-accent/30 group-hover:text-accent group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]">
                <Icon aria-hidden />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text/45 group-hover:text-text/70">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-2">
          {categoryOrder.map((key, index) => (
            <SkillCategoryCard
              key={key}
              categoryKey={key}
              category={skillCategories[key]}
              index={index}
            />
          ))}
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-text/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Depth over buzzwords — backend-first delivery with supporting frontend integration,
          AWS-managed infrastructure patterns, and a focus on performance in production.
        </motion.p>
      </motion.div>
    </section>
  );
}
