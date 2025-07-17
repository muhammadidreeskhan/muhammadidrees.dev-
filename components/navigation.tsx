"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "API Development", href: "/services/api-development" },
  { name: "Consulting", href: "/services/consulting" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsapModule.gsap.registerPlugin(ScrollTrigger);

      const ctx = gsapModule.gsap.context(() => {
        ScrollTrigger.create({
          start: "top -80",
          end: 99999,
          onUpdate: (self) => {
            setIsScrolled(self.progress > 0);
          },
        });
      }, navRef);

      return () => ctx.revert();
    };

    initGSAP();
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-500 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold font-poppins">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">MI</span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/10 dark:bg-gray-900/80 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div className="text-2xl font-bold font-poppins" whileHover={{ scale: 1.05 }} data-cursor-hover>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">MI</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeSection === item.href.slice(1)
                  ? "text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-400"
              }`}
              data-cursor-hover
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                />
              )}
            </motion.button>
          ))}
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="relative text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 dark:text-gray-300 hover:text-blue-400 px-2 py-1" data-cursor-hover>
              Services
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
              <ul className="py-2">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300"
            data-cursor-hover
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 dark:text-gray-300"
            data-cursor-hover
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-lg bg-white/10 dark:bg-gray-900/90 rounded-2xl mt-4 border border-white/20"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                      : "text-gray-600 dark:text-gray-300 hover:bg-white/10"
                  }`}
                  whileHover={{ x: 5 }}
                  data-cursor-hover
                >
                  {item.name}
                </motion.button>
              ))}
              {/* Services Collapsible Section */}
              <div className="pt-2">
                <details>
                  <summary className="cursor-pointer text-gray-600 dark:text-gray-300 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 font-medium">Services</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="block px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
