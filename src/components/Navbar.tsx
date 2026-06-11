"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "What I Build" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#030712]/95 backdrop-blur-xl border-b border-[#374151]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#f9fafb] tracking-tight hover:text-[#f59e0b] transition-colors"
          >
            FBMacagba
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#9ca3af] hover:text-[#f59e0b] transition-colors rounded-lg hover:bg-[#f59e0b]/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 text-sm font-semibold bg-[#f59e0b] text-[#030712] rounded-lg hover:bg-[#fbbf24] transition-colors"
            >
              Hire Me
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[#030712] border-t border-[#374151]/50 overflow-y-auto"
          >
            <nav className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-[#9ca3af] hover:text-[#f59e0b] hover:bg-[#f59e0b]/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 text-center text-base font-semibold bg-[#f59e0b] text-[#030712] rounded-lg hover:bg-[#fbbf24] transition-colors"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
