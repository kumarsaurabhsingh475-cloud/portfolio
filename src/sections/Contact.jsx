import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { fadeUp } from '../animations/variants';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import SectionHeading from '../components/ui/SectionHeading';
import { personal } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)] focus:ring-0';

  return (
    <section id="contact" className="relative">
      <motion.div className="section-padding">
        <SectionHeading
          tag="Contact"
          title="Get in Touch"
          subtitle="Open to backend roles, collaborations, and tough problems worth solving."
        />

        <motion.div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <GlassCard>
              <h3 className="font-display text-lg font-semibold text-white">Get in touch</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 text-text/75 transition hover:text-accent"
                  >
                    <FiMail className="text-accent" />
                    {personal.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-text/75">
                  <FiPhone className="text-accent" />
                  {personal.phone}
                </li>
                <li className="flex items-center gap-3 text-text/75">
                  <FiMapPin className="text-accent" />
                  {personal.location}
                </li>
              </ul>
              <motion.div className="mt-8 flex gap-4">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-accent/50 hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-accent/50 hover:text-accent"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="rounded-xl border border-white/10 p-3 transition hover:border-accent/50 hover:text-accent"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </motion.div>
            </GlassCard>
          </motion.div>

          <motion.form
            className="glass lg:col-span-3 rounded-2xl p-6 md:p-8"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-text/60">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-text/60">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </label>
            </motion.div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm text-text/60">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project or role..."
              />
            </label>
            <motion.div className="mt-6">
              <Button type="submit" icon={FiSend}>
                {submitted ? 'Opening mail client...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
