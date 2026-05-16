import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      className="mb-14 text-center md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
    >
      {tag && (
        <span className="font-mono text-sm font-medium tracking-widest text-accent uppercase">
          {tag}
        </span>
      )}
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-text/70 md:text-lg">{subtitle}</p>
      )}
      <motion.div
        className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-secondary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </motion.div>
  );
}
