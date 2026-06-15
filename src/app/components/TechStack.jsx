'use client'

import { motion } from 'framer-motion'

export default function TechStack() {
  const coreLanguages = [
    { name: 'JavaScript', type: 'Language' },
    { name: 'React.js', type: 'Frontend Framework' },
    { name: 'Next.js', type: 'Full-Stack Framework' },
    { name: 'Node.js', type: 'Runtime Environment' },
    { name: 'Express.js', type: 'Backend Framework' },
    { name: 'TailwindCSS', type: 'Styling Engine' },
  ]

  const tools = [
    { name: 'Supabase', type: 'Database / Auth' },
    { name: 'Git', type: 'Version Control' },
    { name: 'GitHub', type: 'Repository Hosting' },
    { name: 'Vercel', type: 'Deployment / Hosting' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  }

  return (
    <section id="stack" className="py-24 px-6 bg-white text-stone-900 dark:bg-black dark:text-stone-200 border-t border-stone-100 dark:border-stone-950">
      <div className="max-w-6xl mx-auto">
        
        {/* header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
            03 / Capabilities
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 sm:text-4xl">
            Technical Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* core stack */}
          <div className="space-y-6">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                Core Technologies
              </h3>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {coreLanguages.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="group relative p-4 rounded-md border border-stone-200 dark:border-stone-900 bg-stone-50/50 dark:bg-stone-950/20 hover:border-yellow-600/40 dark:hover:border-yellow-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(202,138,4,0.05)]"
                >
                  <p className="font-bold text-stone-950 dark:text-white transition-colors duration-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-600">
                    {tech.name}
                  </p>
                  <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">
                    {tech.type}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* tools */}
          <div className="space-y-6">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                Ecosystem & Tools
              </h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="group relative p-4 rounded-md border border-stone-200 dark:border-stone-900 bg-stone-50/50 dark:bg-stone-950/20 hover:border-yellow-600/40 dark:hover:border-yellow-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(202,138,4,0.05)]"
                >
                  <p className="font-bold text-stone-950 dark:text-white transition-colors duration-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-600">
                    {tool.name}
                  </p>
                  <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">
                    {tool.type}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}