export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-bg/80 py-8 text-center text-slate-500">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <p>Designed and developed with React and Tailwind CSS.</p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} Kartik. Built for modern placements.</p>
      </div>
    </footer>
  );
}
