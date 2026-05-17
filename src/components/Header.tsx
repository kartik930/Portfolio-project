import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white">
          Kartik
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="inline-flex items-center rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {open ? <BiX size={22} /> : <BiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800/75 bg-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
