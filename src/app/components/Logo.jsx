'use client'

export default function Logo({ variant = 'text' }) {
  if (variant === 'text') {
    return (
      <div className="flex items-center tracking-tight font-black text-xl select-none group cursor-pointer text-stone-950 dark:text-white">
        <span>GAIUS</span>
        <span className="text-yellow-600 transition-transform duration-300 group-hover:translate-x-0.5 inline-block">
          .dev
        </span>
      </div>
    )
  }

  if (variant === 'bracket') {
    return (
      <div className="flex items-center font-mono text-lg font-bold select-none cursor-pointer tracking-tighter">
        <span className="text-stone-300 dark:text-stone-800 transition-colors duration-300 group-hover:text-yellow-600">
          &lt;
        </span>
        <span className="text-stone-950 dark:text-white px-0.5">
          G<span className="text-yellow-600">.</span>D
        </span>
        <span className="text-stone-300 dark:text-stone-800 transition-colors duration-300 group-hover:text-yellow-600">
          /&gt;
        </span>
      </div>
    )
  }
  if (variant === 'monogram') {
    return (
      <div className="relative font-black text-2xl select-none cursor-pointer h-9 w-9 flex items-center justify-center rounded border border-stone-200 dark:border-stone-900 bg-stone-50/50 dark:bg-stone-950/20 group-hover:border-yellow-600/30 transition-all duration-300 text-stone-950 dark:text-white">
        <span>G</span>
        <span className="text-yellow-600 absolute bottom-1 right-1.5 leading-none text-sm select-none">
          .
        </span>
      </div>
    )
  }

  return null
}