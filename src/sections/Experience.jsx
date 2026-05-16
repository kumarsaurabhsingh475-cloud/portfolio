import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import SectionHeading from '../components/ui/SectionHeading';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <motion.div className="section-padding">
        <SectionHeading
          tag="Experience"
          title="Professional Journey"
          subtitle="Building enterprise SaaS backends across EdTech, solar EPC, and smart society platforms."
        />

        {experience.map((job) => (
          <div key={job.company} className="relative mx-auto max-w-4xl">
            <motion.div
              className="glass mb-12 rounded-2xl p-6 md:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <motion.div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <div className="text-right font-mono text-sm text-text/60">
                  <p>{job.duration}</p>
                  <p>{job.location}</p>
                </div>
              </motion.div>
              <p className="mt-4 text-text/75">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="relative border-l border-accent/30 pl-8 md:pl-10">
              {job.projects.map((project, index) => (
                <motion.article
                  key={project.name}
                  className="relative mb-12 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="absolute -left-[2.55rem] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg md:-left-[2.85rem]">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#38bdf8]" />
                  </span>
                  <div className="glass rounded-xl p-5 md:p-6">
                    <h4 className="font-display text-lg font-semibold text-white">{project.name}</h4>
                    <p className="mt-1 font-mono text-xs text-secondary">{project.stack}</p>
                    <p className="mt-1 text-xs text-text/50">{project.period}</p>
                    <ul className="mt-4 space-y-2">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-text/75">
                          <span className="shrink-0 text-accent">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
