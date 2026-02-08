import { ArrowRight, Hexagon, Sparkles } from 'lucide-react';
import React, { useMemo } from 'react';

import { motion } from 'framer-motion';

type FloatShape = {
  top: string;
  left: string;
  size: number;
  duration: number;
};

type Particle = {
  top: string;
  left: string;
  duration: number;
  delay: number;
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function StartProjectCTA() {
  const shapes = useMemo<FloatShape[]>(
    () =>
      Array.from({ length: 6 }, () => ({
        top: `${rand(0, 100)}%`,
        left: `${rand(0, 100)}%`,
        size: rand(40, 140),
        duration: rand(5, 10),
      })),
    [],
  );

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 20 }, () => ({
        top: `${rand(0, 100)}%`,
        left: `${rand(0, 100)}%`,
        duration: rand(3, 8),
        delay: rand(0, 5),
      })),
    [],
  );

  return (
    <section className="relative overflow-hidden bg-[#08080c] py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="bg-hive-purple/20 absolute top-0 left-1/4 h-[500px] w-[500px] animate-pulse rounded-full blur-[100px]" />
        <div
          className="bg-hive-gold/10 absolute right-1/4 bottom-0 h-[600px] w-[600px] animate-pulse rounded-full blur-[120px]"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-4 inset-y-8 rounded-[3rem] border border-white/[0.03]" />
      <div className="pointer-events-none absolute inset-x-8 inset-y-12 rounded-[2.5rem] border border-white/[0.02]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111118]/50 p-12 shadow-2xl backdrop-blur-xl"
        >
          <div className="via-hive-gold/50 absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent opacity-50" />

          <div className="bg-hive-gold/10 border-hive-gold/20 mb-8 inline-flex items-center space-x-2 rounded-full border px-4 py-1.5">
            <Sparkles size={14} className="text-hive-gold" />
            <span className="text-hive-gold text-xs font-bold tracking-widest uppercase">
              Start Building
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl">
            Ready to Build <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-400">
            Launch your project on HiveWork today and tap into a global network of talented
            contributors ready to help you succeed.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <button className="bg-hive-gold group relative transform overflow-hidden rounded-full px-10 py-5 text-lg font-bold text-[#08080c] shadow-[0_0_25px_rgba(212,168,83,0.4)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_40px_rgba(212,168,83,0.6)]">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
            </button>

            <a
              href="#"
              className="group flex items-center rounded-full px-6 py-4 font-bold text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              Read the Documentation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>

      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-0 text-white/[0.03]"
          style={{ top: s.top, left: s.left }}
          animate={{ y: [0, -30, 0], rotate: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          <Hexagon size={s.size} fill="currentColor" />
        </motion.div>
      ))}

      {particles.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          className="bg-hive-gold absolute h-1 w-1 rounded-full opacity-20"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}
    </section>
  );
}
