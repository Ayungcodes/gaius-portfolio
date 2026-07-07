"use client";

// all imports
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevState) => ({
      ...prevState,
      openNav: setOpenNav(!openNav),
    }));
  };

  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-stone-700/50 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* logo */}
        <div className="text-xl font-bold">
          <Logo />
        </div>
        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#home");
            }}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-all duration-300 relative group py-2"
          >
            Home
          </Link>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#about");
            }}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-all duration-300 relative group py-2"
          >
            About
          </Link>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#projects");
            }}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-all duration-300 relative group py-2"
          >
            Projects
          </Link>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#stack");
            }}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-all duration-300 relative group py-2"
          >
            Stack
          </Link>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#services");
            }}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-all duration-300 relative group py-2"
          >
            Services
          </Link>

          {/* CTA */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#contact");
            }}
            className="ml-2 px-4 py-2 rounded border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-300 hover:text-yellow-600 dark:hover:text-yellow-600 hover:border-yellow-600/40 dark:hover:border-yellow-600/30 bg-stone-50/50 dark:bg-stone-950/20 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex justify-center items-center gap-3">
          {/* theme toggle */}
          <ThemeToggle />

          {/* toggleBtn */}
          <button
            onClick={toggleNav}
            className={`
    relative block lg:hidden
    w-10 h-10 rounded border
    cursor-pointer z-50
    bg-stone-50/50 dark:bg-stone-950/20
    border-stone-200 dark:border-stone-800
    hover:border-yellow-600/40 dark:hover:border-yellow-600/30
    transition-all duration-500
    ${openNav ? "hover:rotate-90" : ""}
  `}
            aria-label="Toggle Menu"
          >
            {/* top line */}
            <span
              className={`
      absolute left-1/2 top-1/2
      h-[2px] w-5
      bg-yellow-600 rounded-full
      transition-all duration-500 ease-in-out
      ${openNav ? "-translate-x-1/2 -translate-y-1/2 rotate-45" : "-translate-x-1/2 -translate-y-[5px]"}
    `}
            />

            {/* bottom line */}
            <span
              className={`
      absolute left-1/2 top-1/2
      h-[2px] w-5
      bg-yellow-600 rounded-full
      transition-all duration-500 ease-in-out
      ${openNav ? "-translate-x-1/2 -translate-y-1/2 -rotate-45" : "-translate-x-1/2 translate-y-[3px]"}
    `}
            />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white dark:bg-black overflow-hidden"
          >
            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.08 },
                },
              }}
              initial="hidden"
              animate="show"
              className="px-6 py-10"
            >
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Stack", href: "#stack" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group border-b border-stone-100 dark:border-stone-900"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      setOpenNav(false);
                      e.preventDefault();
                      lenis?.scrollTo(item.href);
                    }}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-stone-400 dark:text-stone-600 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-600">
                        {item.label}
                      </span>
                    </span>
                    <span className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center text-stone-300 dark:text-stone-700 transition-transform duration-300 group-hover:-translate-y-6">
                        →
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center text-yellow-600 translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
