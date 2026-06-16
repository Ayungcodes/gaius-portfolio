"use client";

// all imports
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section id="home" className="min-h-[115vh] md:min-h-[92vh] lg:min-h-[105vh] flex flex-col justify-center items-center px-6 relative overflow-hidden bg-white text-stone-900 dark:bg-black dark:text-stone-200">
      {/* bg accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/5 dark:bg-yellow-600/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center z-10 space-y-6"
      >
        {/* status */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 text-xs font-medium tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* hook */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Engineering pixel-perfect UIs <br />& robust{" "}
          <span className="text-yellow-600 dark:text-yellow-600">
            architectures.
          </span>
        </motion.h1>

        {/* description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-xl text-stone-600 dark:text-stone-400 font-normal leading-relaxed"
        >
          Hi, I&apos;m a Full-Stack Developer specializing in building fast,
          scalable web applications. I bridge the gap between elegant frontend
          interfaces and secure, optimized backend logic.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-white dark:bg-stone-200 dark:text-black font-semibold rounded-md hover:bg-yellow-600 dark:hover:bg-yellow-600 dark:hover:text-white transition-colors duration-200 text-center shadow-md shadow-stone-900/10 dark:shadow-none"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 border border-stone-200 dark:border-stone-800 font-semibold rounded-md bg-transparent hover:bg-stone-50 dark:hover:bg-stone-950 hover:border-yellow-600 transition-colors duration-200 text-center"
          >
            Let&apos;s Talk
          </a>
          <a
            href="Gaius Emmanuel CV.pdf"
            target="_blank"
            className="w-full sm:w-auto px-8 py-3 border border-stone-200 dark:border-stone-800 font-semibold rounded-md bg-transparent hover:bg-stone-50 dark:hover:bg-stone-950 hover:border-yellow-600 transition-colors duration-200 text-center"
          >
            View CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
