"use client";

// all imports
import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    {
      step: "01",
      title: "Web Development",
      description:
        "Crafting high-end, responsive landing pages, business spaces, and portfolio sites. Focused on lightning-fast load times, seamless responsive layouts, and translating elegant designs into pixel-perfect frontend code.",
    },
    {
      step: "02",
      title: "Web App Development",
      description:
        "Engineering dynamic, multi-tenant web applications and custom dashboards. Building secure frontend architectures deeply integrated with backend systems, protected routing, and real-time state management.",
    },
    {
      step: "03",
      title: "SEO & Performance Optimization",
      description:
        "Structuring sites from the ground up to rank on search engines. I ensure clean semantic HTML structures, metadata execution, and structural schema alignments so your ideas are highly discoverable and performant.",
    },
    {
      step: "04",
      title: "Database & Backend Integration",
      description:
        "Designing reliable application structures underneath the beauty. Setting up optimized relational databases, secure authentication structures, and custom API layers utilizing frameworks like Node.js, Express, and Supabase.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section
      id="services"
      className="py-24 px-6 bg-white text-stone-900 dark:bg-black dark:text-stone-200 border-t border-stone-100 dark:border-stone-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
            04 / Core Focus
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 sm:text-4xl">
            Services & Expertise
          </h2>
        </div>

        {/* services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {servicesList.map((service) => (
            <motion.div
              key={service.step}
              variants={cardVariants}
              className="group relative p-8 rounded-md border border-stone-200 dark:border-stone-900 bg-stone-50/40 dark:bg-stone-950/10 hover:border-yellow-600/40 dark:hover:border-yellow-600/30 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-stone-400 dark:text-stone-600 tracking-wider">
                  {`// ${service.step}`}
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-800 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-600 transition-all duration-300 group-hover:scale-125" />
              </div>

              <div className="mt-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 dark:text-white transition-colors duration-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-600">
                  {service.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-600 transition-all duration-500 group-hover:w-full rounded-b-md" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
