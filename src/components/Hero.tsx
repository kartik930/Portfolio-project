import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kartik930',
    icon: FaGithub
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kartik-kumar-srivastava-5616732b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: FaLinkedin
  },
  {
    label: 'Email',
    href: 'mailto:kartiksri176@gmail.com',
    icon: FaEnvelope
  }
];

export default function Hero() {
  return (
    <section id="home" className="grid gap-12 pt-20 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-800/80 bg-surface/80 p-8 shadow-glow backdrop-blur-xl sm:p-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">Full-stack developer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Hi, I’m <span className="text-accent">Kartik</span>.
            <br /> I build scalable web and backend systems for modern teams.
          </h1>
          <p className="mt-6 max-w-2xl text-slate-300 sm:text-lg">
            Full-stack developer working with React, Node.js, Express, and MongoDB to deliver clean, accessible products with strong performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-400"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Open Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-accent hover:text-white"
                >
                  <Icon />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
