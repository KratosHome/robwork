import { ArrowRight, Hexagon, Play } from 'lucide-react';
import React, { useMemo } from 'react';

import { motion } from 'framer-motion';

const avatars = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Mila',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Dabe',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Zack',
];

type AvatarMotion = {
  top: number;
  floatDuration: number;
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function HeroSection() {
  const avatarMotion = useMemo<AvatarMotion[]>(
    () =>
      avatars.map((_, i) => ({
        top: Math.abs(i - 3.5) * 8,
        floatDuration: rand(3, 5), // 3 + random*2
      })),
    [],
  );

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-24">
      <div className="aurora-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="text-hive-gold/10 absolute top-[10%] left-[5%]"
          animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Hexagon size={180} strokeWidth={1} />
        </motion.div>

        <motion.div
          className="text-hive-purple/10 absolute right-[10%] bottom-[20%]"
          animate={{ y: [0, 40, 0], rotate: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Hexagon size={240} strokeWidth={1} />
        </motion.div>

        <motion.div
          className="absolute top-[40%] right-[25%] text-blue-500/5"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Hexagon size={100} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="relative mb-8 hidden h-32 w-full max-w-3xl sm:block">
          {avatars.map((src, i) => (
            <motion.div
              key={src}
              className="absolute z-10 h-14 w-14 overflow-hidden rounded-full border-2 border-[#1a1a24] bg-[#111118] shadow-[0_0_15px_rgba(212,168,83,0.15)]"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0],
                x: (i - 3.5) * 70,
              }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.1 },
                scale: { duration: 0.5, delay: i * 0.1 },
                y: {
                  repeat: Infinity,
                  duration: avatarMotion[i]?.floatDuration ?? 4,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                },
                x: { duration: 0 },
              }}
              style={{
                left: '50%',
                top: avatarMotion[i]?.top ?? Math.abs(i - 3.5) * 8,
              }}
            >
              <img
                src={src}
                alt="Community member"
                className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/10 ring-inset" />
            </motion.div>
          ))}
        </div>

        {/* решта коду без змін */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          {/* ... */}
          <div className="mb-16 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-hive-gold group relative flex items-center overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-[#08080c] shadow-[0_0_20px_rgba(212,168,83,0.4)] transition-all hover:shadow-[0_0_30px_rgba(212,168,83,0.6)]"
            >
              <span className="relative z-10 flex items-center">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:border-hive-gold/50 flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/10"
            >
              <Play className="text-hive-gold mr-2 h-5 w-5 fill-current" />
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
