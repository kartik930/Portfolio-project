import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-800/90 bg-surface/80 p-8 shadow-glow backdrop-blur-xl sm:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-cyan-400">Featured work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
          </div>
          <p className="max-w-xl text-slate-400 sm:text-right">
            A selection of production-ready applications and portfolio pieces that show how I solve real problems.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-slate-800/90 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-accent hover:bg-slate-900/90"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-cyan-300 transition hover:text-white"
                >
                  View
                </a>
              </div>
              <p className="mt-4 text-slate-400 leading-7">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
