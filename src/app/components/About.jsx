"use client";

// all imports
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white text-stone-900 dark:bg-black dark:text-stone-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
            01 / Background
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 sm:text-4xl">
            The Story Behind the Craft
          </h2>
        </motion.div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* text narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-stone-600 dark:text-stone-400 font-normal"
          >
            <p>
              Driven by curiosity and a quiet sense of adventure, I stepped into
              web development three years ago. What began as a simple
              fascination gradually became a craft — a discipline shaped by
              precision, intention, and a deep respect for the harmony between
              form and function.
            </p>

            <p>
              I design and build digital experiences where elegance serves
              purpose. Every interface is approached with a careful eye, every
              interaction shaped to feel seamless, intuitive, and alive. My work
              lives at the intersection of responsive design, component-driven
              architecture, and clean, search-friendly code — structure beneath
              beauty, logic beneath motion.
            </p>

            {/* Kirill's quote */}
            <div className="my-8 pl-4 border-l-2 border-yellow-600 italic text-stone-800 dark:text-stone-200 bg-stone-50/50 dark:bg-stone-900/30 py-3 pr-2 rounded-r-md">
              “Never stop learning, because life never stops teaching.”
              <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-600 mt-2 not-italic">
                — Kirill Korshikov
              </span>
            </div>

            <p>
              In a field that never stands still, I remain a devoted student of
              the craft. I carry this philosophy into every collaboration, every
              challenge, and every creation — refining not only what I build,
              but how I think.
            </p>

            <p className="text-stone-900 dark:text-stone-200 font-medium">
              This portfolio is a collection of that journey — evolving ideas,
              real-world solutions, and a continuous pursuit of clarity,
              excellence, and meaningful digital experiences.
            </p>
          </motion.div>

          {/* photo frame placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="lg:col-span-5 relative group w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* bg accent box */}
            <div className="absolute inset-0 border border-yellow-600 rounded-md translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 pointer-events-none" />

            {/* photo container */}
            <div className="relative aspect-[4/5] w-full rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden flex items-center justify-center shadow-lg transition-colors duration-300 group">
              <Image
                src="/images/my-photo.jpg"
                alt="Gaius Emmanuel Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-102"
                sizes="(max-w-7xl) 33vw, 100vw"
                priority
              />

              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-white/70 dark:bg-black/70 border border-stone-200/50 dark:border-stone-800/50 group-hover:border-yellow-600/40 rounded p-4 grid grid-cols-3 gap-2 text-center transition-all duration-300 shadow-xl z-10">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-600 transition-colors duration-300 tracking-tight">
                    3+
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-0.5">
                    Years
                  </span>
                </div>

                {/* center divider */}
                <div className="flex flex-col border-x border-stone-200/60 dark:border-stone-800/60 px-2">
                  <span className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-600 transition-colors duration-300 tracking-tight">
                    10
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-0.5">
                    Core Tools
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-600 transition-colors duration-300 tracking-tight">
                    20+
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-0.5">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
