import { motion } from 'framer-motion';
import { SiSpringboot } from 'react-icons/si';
import { fadeUp, staggerContainer } from '../animations/variants';
import GlassCard from '../components/ui/GlassCard';
import SectionHeading from '../components/ui/SectionHeading';
import { about, achievements, education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-padding">
        <SectionHeading
          tag="About Me"
          title="Backend Engineer with Impact"
          subtitle="Passionate about scalable systems, clean APIs, and shipping features that matter."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            <GlassCard>
              <motion.p variants={fadeUp} className="leading-relaxed text-text/80">
                {about.summary}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-text/70">
                {about.passion}
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-6 space-y-2">
                {about.specialization.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text/75">
                    <SiSpringboot className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </motion.ul>
              {about.expertiseTopics?.length > 0 && (
                <motion.div variants={fadeUp} className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-text/50">
                    Core focus areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {about.expertiseTopics.map((topic) => (
                      <span
                        key={topic.name}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                          topic.featured
                            ? 'border-accent/50 bg-accent/15 text-accent shadow-[0_0_16px_rgba(56,189,248,0.2)]'
                            : 'border-white/10 bg-white/5 text-text/80'
                        }`}
                      >
                        {topic.featured && <span className="mr-1">★</span>}
                        {topic.name}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </GlassCard>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {about.highlights.map((h, i) => (
              <motion.div key={h.label} variants={fadeUp} custom={i}>
                <GlassCard className="text-center">
                  <p className="font-display text-3xl font-bold text-gradient">{h.value}</p>
                  <p className="mt-1 text-sm text-text/60">{h.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <GlassCard>
            <h3 className="font-display text-lg font-semibold text-white">Achievements</h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-text/75">
                  <span className="text-accent">▹</span>
                  {a}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-lg font-semibold text-white">Education</h3>
            <p className="mt-2 font-medium text-accent">{education.degree}</p>
            <p className="text-sm text-text/70">{education.institution}</p>
            <p className="mt-2 font-mono text-xs text-text/50">
              {education.period} · {education.score}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
