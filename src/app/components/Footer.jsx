const Footer = () => {
  return (
    <footer className="w-full border-t border-stone-100 dark:border-stone-900 bg-white dark:bg-black py-8 px-6 transition-colors duration-300">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs font-mono text-stone-400 dark:text-stone-600">
    
    {/* signature */}
    <p className="text-center sm:text-left tracking-tight">
      © 2026 Gaius Emmanuel. All structures built with intent.
    </p>

    {/* build stack */}
    <p className="tracking-widest uppercase text-[10px] sm:text-[11px] opacity-80">
      Next.js + Tailwind CSS + Motion
    </p>

  </div>
</footer>
  )
}

export default Footer
