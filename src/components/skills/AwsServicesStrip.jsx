import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa6';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { awsServices } from '../../data/portfolioData';

export default function AwsServicesStrip() {
  return (
    <motion.div
      className="relative mb-12 overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-bg to-accent/5 p-6 md:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <motion.div variants={fadeUp} className="relative flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
          <FaAws className="text-lg" aria-hidden />
          AWS Production Stack
        </span>
        <span className="text-sm text-text/60">AWS services I use on live SaaS products</span>
      </motion.div>

      <motion.div
        className="relative mt-6 grid gap-4 sm:grid-cols-3"
        variants={staggerContainer}
      >
        {awsServices.map((service, i) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            custom={i}
            className="group glass rounded-xl border border-white/10 p-5 transition duration-300 hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.12)]"
            whileHover={{ y: -4 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <FaAws className="text-2xl text-amber-400/90 transition group-hover:scale-110" aria-hidden />
              <span className="rounded-md bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300/90">
                AWS
              </span>
            </div>
            <h4 className="font-display text-base font-semibold text-white">{service.name}</h4>
            <p className="mt-1 text-sm font-medium text-accent/90">{service.role}</p>
            <p className="mt-2 text-xs leading-relaxed text-text/60">{service.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
