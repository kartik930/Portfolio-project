import { motion } from 'framer-motion';

const highlights = [
  'Built responsive UI for hiring portals and product landing pages.',
  'Focused on clean architecture and component-driven design.',
  'Experience with REST, GraphQL, and modern deployment workflows.'
];

export default function About() {
  return (
    <section id="about" className="mt-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-800/90 bg-surface/80 p-8 shadow-glow backdrop-blur-xl sm:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-cyan-400">About Me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Who I am</h2>
          </div>
          <span className="rounded-full bg-slate-950/80 px-4 py-2 text-sm uppercase tracking-[0.24em] text-slate-300">
            React portfolio showcase
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4 text-slate-300 sm:text-lg">
            <p>
              I am a full-stack developer who builds polished web applications and backend systems that
              feel fast, accessible, and resilient. I focus on React-driven interfaces combined with
              scalable Node.js APIs and modern deployment workflows.
            </p>
            <p>
              I enjoy collaborating with product teams, writing clean architecture, and turning ideas into
              production-ready experiences that users love.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-6 shadow-xl shadow-slate-900/40 transition hover:-translate-y-1 hover:shadow-slate-900/70">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-800/90 bg-slate-900/80">
              <img
                src="/passport-pic.jpeg"
                alt="Kartik profile"
                className="h-80 w-full object-cover object-center"
              />
            </div>
            <div className="mt-6 space-y-4 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Profile</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Full-stack Developer</h3>
              </div>

              <p className="text-sm leading-6 sm:text-base">
                Bringing UI, API, and data layers together with thoughtful design and strong engineering
                practices.
              </p>

              <div className="grid gap-3 text-sm sm:grid-cols-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'UI/UX', 'Responsive'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
