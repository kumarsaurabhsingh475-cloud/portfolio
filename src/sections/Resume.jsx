import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';
import { fadeUp } from '../animations/variants';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import SectionHeading from '../components/ui/SectionHeading';
import { personal } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="relative">
      <div className="section-padding">
        <SectionHeading
          tag="Resume"
          title="Download My Resume"
          subtitle="Experience, skills, and education in one file, ready to send to recruiters."
        />

        <motion.div
          className="mx-auto max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <GlassCard className="text-center">
            <motion.div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <FiFileText className="text-4xl text-accent" />
            </motion.div>
            <h3 className="font-display text-xl font-bold text-white">
              {personal.name}, Resume
            </h3>
            <p className="mt-2 text-text/70">
              Java Backend Engineer · 2.5 years · Spring Boot · Microservices · SaaS
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={personal.resumeDownloadUrl} icon={FiDownload}>
                Download PDF
              </Button>
              <Button
                variant="outline"
                href={personal.resumeViewUrl}
                icon={FiFileText}
              >
                View in Browser
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
