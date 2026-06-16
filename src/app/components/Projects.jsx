"use client";

// all imports
import { motion } from "framer-motion";
import Image from "next/image";
import { projectsArr } from "../constants";

export default function Projects() {

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white text-stone-900 dark:bg-black dark:text-stone-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
            02 / Selected Works
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 sm:text-4xl">
            Real-World Solutions
          </h2>
        </div>

        {/* projects container */}
        <div className="space-y-32">
          {projectsArr.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={projectVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 w-full group relative aspect-[16/10] bg-stone-50 dark:bg-stone-900/40 rounded-md border border-stone-200 dark:border-stone-800 overflow-hidden ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="absolute inset-0 border border-transparent group-hover:border-yellow-600/30 transition-colors duration-300 pointer-events-none z-20 rounded-md" />

                  <Image
                    src={project.photo}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-102"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-stone-400 dark:text-stone-600 tracking-wider">
                      {/* eslint-disable-next-line */}
                      {project.id} // {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* links */}
                  <div className="flex items-center gap-6 pt-4 text-sm font-semibold tracking-wide">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-stone-900 dark:text-stone-100 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors duration-200 group"
                    >
                      Live Project
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-950 dark:text-stone-500 dark:hover:text-stone-200 transition-colors duration-200"
                    >
                      Codebase
                      <span>::</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
