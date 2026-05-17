import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="mt-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-800/90 bg-surface/80 p-8 shadow-glow backdrop-blur-xl sm:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-cyan-400">Get in touch</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Contact</h2>
          </div>
          <p className="max-w-xl text-slate-400 sm:text-right">
            I’m available for internships, full-time roles, and freelance partnerships.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <form
            action="mailto:kartiksri176@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-5 rounded-3xl border border-slate-800/90 bg-slate-950/70 p-6"
          >
            <div>
              <label className="text-sm font-medium text-slate-200">Name</label>
              <input
                type="text"
                name="Name"
                required
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200">Email</label>
              <input
                type="email"
                name="Email"
                required
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200">Message</label>
              <textarea
                name="Message"
                rows={5}
                required
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-400"
            >
              Send message
            </button>
          </form>

          <div className="rounded-3xl bg-slate-950/70 p-6 text-slate-300 shadow-xl shadow-slate-900/40">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Reach out directly</p>
            <div className="mt-6 space-y-4 text-sm leading-7">
              <p>
                <strong className="text-white">Email:</strong> kartiksri176@gmail.com
              </p>
              <p>
                <strong className="text-white">Phone:</strong> 7007606544
              </p>
              <p>
                <strong className="text-white">LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/kartik-kumar-srivastava-5616732b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 transition hover:text-white"
                >
                  View profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
