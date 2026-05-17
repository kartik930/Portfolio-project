import { motion } from 'framer-motion';
import skills from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="mt-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-800/90 bg-surface/80 p-8 shadow-glow backdrop-blur-xl sm:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-cyan-400">Expertise</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Skills & tools</h2>
          </div>
          <p className="max-w-xl text-slate-400 sm:text-right">
            Clean, modern front-end stacks with a focus on performance, developer experience, and maintainability.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="rounded-3xl border border-slate-800/90 bg-slate-950/70 p-5 transition hover:border-accent/80 hover:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="mt-3 text-slate-400 leading-7">{skill.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
