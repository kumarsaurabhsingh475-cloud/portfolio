import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import AnimatedBlobs from './components/effects/AnimatedBlobs';
import CursorGlow from './components/effects/CursorGlow';
import LoadingScreen from './components/effects/LoadingScreen';
import ParticleBackground from './components/effects/ParticleBackground';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/layout/ScrollToTop';
import { personal } from './data/portfolioData';
import { usePageMeta } from './hooks/usePageMeta';
import ErrorBoundary from './components/ErrorBoundary';

const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Resume = lazy(() => import('./sections/Resume'));
const Contact = lazy(() => import('./sections/Contact'));

function SectionFallback() {
  return <div className="section-padding h-40 animate-pulse rounded-2xl bg-white/5" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  usePageMeta({
    title: `${personal.name} | ${personal.title}`,
    description: `${personal.name} — ${personal.title}. Portfolio showcasing Java, Spring Boot, microservices, and SaaS backend engineering.`,
    keywords: 'Java, Spring Boot, Backend Developer, REST API, GraphQL, Microservices',
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-bg text-text">
        <ParticleBackground />
        <AnimatedBlobs />
        <CursorGlow />
        <Navbar />

        <main className="relative z-10">
          <ErrorBoundary>
            <Suspense fallback={<SectionFallback />}>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Resume />
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
