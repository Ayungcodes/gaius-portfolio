"use client";

// all imports
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevState) => ({
      ...prevState,
      openNav: setOpenNav(!openNav),
    }));
  };

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
        <div className="hidden lg:flex gap-4">
          <Link
            href="#"
            className=""
          >
            Home
          </Link>
          <Link
            href="#"
            className=""
          >
            About
          </Link>
          <Link
            href="#"
            className=""
          >
            Projects
          </Link>
          <Link
            href="#"
            className=""
          >
            Skills
          </Link>
          <Link
            href="#"
            className=""
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
    w-10 h-10
    cursor-pointer
    z-50
    rounded-full
    transition-transform duration-500
    ${openNav ? "hover:rotate-[90deg]" : ""}
  `}
          >
            <span
              className={`
      absolute left-1/2 top-1/2
      h-[2px] w-7 md:w-8
      bg-yellow-600 rounded-full
      transition-all duration-500 ease-in-out
      -translate-x-1/2 -translate-y-1/2
      ${openNav ? "rotate-45" : "-translate-y-1.5"}
    `}
            />

            <span
              className={`
      absolute left-1/2 top-1/2
      h-[2px] w-7 md:w-8
      bg-yellow-600 rounded-full
      transition-all duration-500 ease-in-out
      -translate-x-1/2 -translate-y-1/2
      ${openNav ? "-rotate-45" : "translate-y-1.5"}
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
            className="md:hidden bg-black overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
             <Link
                  href='#'
                //   onClick={() => setIsOpen(false)}
                  className="block text-xl font-semibold text-stone-100 duration-300 hover:text-yellow-600 transition-colors border-b border-gray-500 pb-3 cursor-pointer"
                >
                  Home
                </Link>
             <Link
                  href='#'
                //   onClick={() => setIsOpen(false)}
                  className="block text-xl font-semibold text-stone-100 duration-300 hover:text-yellow-600 transition-colors border-b border-gray-500 pb-3 cursor-pointer"
                >
                  About
                </Link>
             <Link
                  href='#'
                //   onClick={() => setIsOpen(false)}
                  className="block text-xl font-semibold text-stone-100 duration-300 hover:text-yellow-600 transition-colors border-b border-gray-500 pb-3 cursor-pointer"
                >
                  Projects
                </Link>
             <Link
                  href='#'
                //   onClick={() => setIsOpen(false)}
                  className="block text-xl font-semibold text-stone-100 duration-300 hover:text-yellow-600 transition-colors border-b border-gray-500 pb-3 cursor-pointer"
                >
                  Skills
                </Link>
             <Link
                  href='#'
                //   onClick={() => setIsOpen(false)}
                  className="block text-xl font-semibold text-stone-100 duration-300 hover:text-yellow-600 transition-colors border-b border-gray-500 pb-3 cursor-pointer"
                >
                  Contact
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
