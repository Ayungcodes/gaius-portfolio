"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      handle: "@Gaius-codes",
      url: "https://github.com/Gaius-codes",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      handle: "Gaius Emmanuel",
      url: "https://www.linkedin.com/in/gaius-emmanuel-b10279202/",
      icon: faLinkedin,
    },
    {
      name: "X / Twitter",
      handle: "@Gaius_codes",
      url: "https://x.com/Gaius_codes",
      icon: faXTwitter,
    },
    // {
    //   name: "Instagram",
    //   handle: "@ayungclassic",
    //   url: "https://www.instagram.com/ayungclassic/",
    //   icon: faInstagram,
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-white text-stone-900 dark:bg-black dark:text-stone-200 border-t border-stone-100 dark:border-stone-950 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/[0.03] dark:bg-yellow-600/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start"
        >
          {/* left side */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
                05 / Connection
              </p>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-stone-950 dark:text-white">
                {`Let's create`} <br />
                something <span className="text-yellow-600">real.</span>
              </h2>
              <p className="max-w-md text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed pt-2">
                Whether you have a groundbreaking application to engineer, a
                project that needs a clean architecture, or simply want to speak
                concept—my door is always open.
              </p>
            </motion.div>

            {/* direct lines */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-900 max-w-md"
            >
              {/* email track */}
              <a
                href="mailto:gaiusemmanuel12@gmail.com"
                className="group flex flex-col justify-center p-4 rounded-md border border-stone-100 dark:border-stone-950 hover:border-yellow-600/30 hover:bg-stone-50/50 dark:hover:bg-stone-950/20 transition-all duration-300"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 dark:text-stone-600">
                  {`// Direct Email`}
                </span>
                <span className="text-lg sm:text-xl font-bold text-stone-950 dark:text-white group-hover:text-yellow-600 transition-colors duration-200 mt-1">
                  gaiusemmanuel12@gmail.com
                </span>
              </a>

              {/* whatsapp track */}
              <a
                href="https://wa.me/2347011372616"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-center p-4 rounded-md border border-stone-100 dark:border-stone-950 hover:border-yellow-600/30 hover:bg-stone-50/50 dark:hover:bg-stone-950/20 transition-all duration-300"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 dark:text-stone-600">
                  {`// Instant Messaging`}
                </span>
                <span className="text-lg sm:text-xl font-bold text-stone-950 dark:text-white group-hover:text-yellow-600 transition-colors duration-200 mt-1 flex items-center gap-2">
                  +234 701 137 2616
                  <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-mono font-normal">
                    Active
                  </span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* right side */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                return (
                  <motion.a
                    key={social.name}
                    variants={itemVariants}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-md border border-stone-200 dark:border-stone-900 bg-stone-50/30 dark:bg-stone-950/10 hover:border-yellow-600/40 dark:hover:border-yellow-600/30 transition-all duration-300 flex flex-col justify-between aspect-[4/3] hover:shadow-[0_0_20px_rgba(202,138,4,0.03)]"
                  >
                    <div className="flex justify-between items-start">
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-lg text-stone-400 dark:text-stone-600 group-hover:text-yellow-600 group-hover:scale-110 transition-all duration-300"
                      />
                      <span className="relative overflow-hidden text-xs font-semibold inset-0 flex items-center justify-end text-yellow-600 duration-300">
                         Connect ↗
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                        {social.name}
                      </h3>
                      <p className="text-lg font-bold text-stone-950 dark:text-white tracking-tight group-hover:text-stone-800 dark:group-hover:text-stone-300 transition-colors duration-200">
                        {social.handle}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
