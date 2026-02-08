import { ArrowRight, CheckCircle, Coins } from 'lucide-react';
import React from 'react';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  name: string;
  description: string;
  avatars: string[];
  taskCount: number;
  rewardPool: string;
  progress: number;
  category: string;
}
export function ProjectCard({
  name,
  description,
  avatars,
  taskCount,
  rewardPool,
  progress,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative h-full"
      whileHover={{
        y: -8,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Animated Gradient Border Background */}
      <div className="from-hive-gold/20 via-hive-purple/20 to-hive-gold/20 absolute -inset-[1px] rounded-2xl bg-gradient-to-r opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118] p-6 transition-colors group-hover:border-transparent">
        {/* Inner Top Glow */}
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent" />

        <div className="relative z-10 mb-5 flex items-start justify-between">
          <span className="rounded-full border border-white/[0.05] bg-white/[0.06] px-3 py-1 text-xs font-bold tracking-wider text-slate-300 uppercase shadow-sm backdrop-blur-sm">
            {category}
          </span>
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </div>

        <h3 className="group-hover:text-hive-gold relative z-10 mb-3 text-xl font-bold text-white transition-colors duration-300">
          {name}
        </h3>
        <p className="relative z-10 mb-6 line-clamp-2 flex-grow text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Team */}
        <div className="relative z-10 mb-6 flex items-center">
          <div className="mr-4 flex -space-x-3">
            {avatars.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#111118] bg-[#1a1a24] transition-transform hover:z-20 hover:scale-110"
              >
                <img src={src} alt="Member" className="h-full w-full object-cover" />
              </div>
            ))}
            {avatars.length > 3 && (
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#111118] bg-[#1a1a24] text-xs font-bold text-slate-300 transition-colors hover:bg-[#2a2a35]">
                +{avatars.length - 3}
              </div>
            )}
          </div>
          <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
            Active Team
          </span>
        </div>

        {/* Stats */}
        <div className="relative z-10 mb-6 grid grid-cols-2 gap-4 rounded-xl border border-white/[0.03] bg-[#0a0a10] p-3">
          <div className="flex items-center space-x-2.5">
            <CheckCircle className="text-hive-purple h-4 w-4" />
            <span className="text-sm font-semibold text-slate-300">{taskCount} Tasks</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Coins className="text-hive-gold h-4 w-4" />
            <span className="text-sm font-semibold text-slate-300">{rewardPool}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="relative z-10 mb-6">
          <div className="mb-2 flex justify-between text-xs">
            <span className="font-medium text-slate-500">Completion</span>
            <span className="text-hive-gold font-bold">{progress}%</span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="from-hive-gold to-hive-gold-light absolute top-0 left-0 h-full bg-gradient-to-r shadow-[0_0_10px_rgba(212,168,83,0.5)]"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${progress}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
                ease: 'easeOut',
              }}
            >
              <div className="absolute top-1/2 right-0 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </motion.div>
          </div>
        </div>

        <button className="text-hive-gold hover:bg-hive-gold group/btn hover:border-hive-gold relative z-10 flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.04] py-3.5 text-sm font-bold transition-all hover:text-[#08080c] hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]">
          <span className="relative z-10 flex items-center">
            Join Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}
