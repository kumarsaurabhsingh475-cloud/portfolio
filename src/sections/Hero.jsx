import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import { fadeUp, floatAnimation, staggerContainer } from '../animations/variants';
import Button from '../components/ui/Button';
import { personal } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { scrollToSection } from '../utils/scrollTo';

export default function Hero() {
  const typed = useTypingEffect(personal.typingRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <motion.div className="section-padding grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p className="font-mono text-sm text-accent" variants={fadeUp}>
            {'// Hello, World'}
          </motion.p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
          </h1>
          <p className="mt-2 text-xl text-text/80 sm:text-2xl">{personal.title}</p>
          <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
            {typed}
            <motion.span
              className="ml-1 inline-block h-5 w-0.5 bg-accent align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text/70 md:text-lg">
            {personal.tagline}. I craft scalable backends with Java, Spring Boot, OAuth/Google
            login, and Swagger-documented APIs — with a strong focus on{' '}
            <span className="font-medium text-accent">SQL query optimization</span> for
            production performance.
          </p>
          <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeUp}>
            <Button href={personal.resumeDownloadUrl} icon={FiDownload}>
              Download Resume
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')} icon={FiMail}>
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex max-w-md justify-center lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 blur-3xl" />
          <motion.div className="relative" variants={floatAnimation} animate="animate">
            {/* gradient frame */}
            <div className="rounded-3xl bg-gradient-to-br from-accent via-secondary to-accent p-[3px] shadow-2xl shadow-accent/20">
              <div className="overflow-hidden rounded-[1.35rem] bg-bg p-2">
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} — ${personal.title}`}
                  className="h-72 w-72 rounded-2xl object-cover object-top sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  loading="eager"
                  width={384}
                  height={384}
                  onError={(e) => {
                    e.currentTarget.src = '/profile-fallback.svg';
                  }}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="glass absolute -bottom-4 -left-4 hidden rounded-xl px-4 py-3 font-mono text-xs sm:block"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-secondary">const</span> dev ={' '}
            <span className="text-accent">&quot;Saurabh&quot;</span>;
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
