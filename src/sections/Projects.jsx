import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/variants';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeading from '../components/ui/SectionHeading';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-padding">
        <SectionHeading
          tag="Projects"
          title="Featured Work"
          subtitle="Products I've helped build and ship, from EdTech to smart society SaaS."
        />

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
