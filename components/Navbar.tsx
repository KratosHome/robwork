'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navLinks } from '@/src/data/nav-links';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled ? 'border-b border-white/5 bg-[#08080c]/80 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl' : 'bg-transparent py-6'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="group flex cursor-pointer items-center space-x-2">
            <span className="group-hover:text-hive-gold text-xl font-bold tracking-tight text-white transition-colors duration-300">
              robwork
            </span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-medium tracking-wide text-slate-400 transition-colors hover:text-white"
              >
                {link.name}
                <span className="bg-hive-gold absolute bottom-0 left-0 h-0.5 w-0 shadow-[0_0_8px_rgba(212,168,83,0.8)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-hive-gold hover:bg-hive-gold-light shadow-glow-gold group relative transform overflow-hidden rounded-full px-6 py-2.5 font-bold text-[#08080c] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)]">
              <span className="relative z-10">Launch App</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 transition-colors hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="overflow-hidden border-b border-white/5 bg-[#111118]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:border-hive-gold border-l-2 border-transparent pl-4 text-lg font-medium text-slate-400 transition-all hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-hive-gold shadow-glow-gold relative mt-4 w-full overflow-hidden rounded-full px-6 py-3 font-bold text-[#08080c]">
                <span className="relative z-10">Launch App</span>
                <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
