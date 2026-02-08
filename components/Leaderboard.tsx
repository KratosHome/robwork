import { ArrowRight, Crown, Medal, Sparkles, Trophy } from 'lucide-react';
import React from 'react';

import { motion } from 'framer-motion';

const contributors = [
  {
    rank: 1,
    name: 'crypto_king',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=King',
    tasks: 142,
    earned: '12.5 ETH',
  },
  {
    rank: 2,
    name: 'solana_dev',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sol',
    tasks: 118,
    earned: '9.8 ETH',
  },
  {
    rank: 3,
    name: 'design_guru',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guru',
    tasks: 96,
    earned: '7.2 ETH',
  },
  {
    rank: 4,
    name: 'rust_ace',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rust',
    tasks: 84,
    earned: '5.4 ETH',
  },
  {
    rank: 5,
    name: 'web3_wizard',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wiz',
    tasks: 72,
    earned: '4.1 ETH',
  },
];

export function Leaderboard() {
  return (
    <section className="relative bg-[#08080c] py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="bg-hive-gold/10 border-hive-gold/20 mb-4 inline-flex items-center justify-center rounded-full border p-3 shadow-[0_0_15px_rgba(212,168,83,0.2)]">
            <Trophy className="text-hive-gold h-6 w-6" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Top Contributors This Month
          </h2>
          <p className="text-lg text-slate-400">
            Recognizing the builders making the biggest impact in the Hive.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111118] p-1 shadow-2xl">
          <div className="overflow-hidden rounded-[22px] bg-[#0a0a12]">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 border-b border-white/[0.05] bg-white/[0.02] px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase">
              <div className="col-span-2 text-center md:col-span-1">Rank</div>
              <div className="col-span-6 md:col-span-5">Contributor</div>
              <div className="col-span-2 text-right md:col-span-3">Tasks</div>
              <div className="col-span-2 text-right md:col-span-3">Earned</div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-50px',
              }}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="divide-y divide-white/[0.03]"
            >
              {contributors.map((user) => (
                <motion.div
                  key={user.rank}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  className={`group relative grid grid-cols-12 items-center gap-4 p-5 transition-all hover:bg-[#1a1a24] ${user.rank === 1 ? 'from-hive-gold/5 bg-gradient-to-r to-transparent' : ''} ${user.rank === 2 ? 'bg-gradient-to-r from-slate-300/5 to-transparent' : ''} ${user.rank === 3 ? 'bg-gradient-to-r from-amber-700/5 to-transparent' : ''} `}
                >
                  {/* Rank Border Indicator */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-1 ${user.rank === 1 ? 'bg-hive-gold shadow-[0_0_10px_#d4a853]' : ''} ${user.rank === 2 ? 'bg-slate-300' : ''} ${user.rank === 3 ? 'bg-amber-700' : 'bg-transparent'} `}
                  />

                  <div className="col-span-2 flex justify-center md:col-span-1">
                    {user.rank === 1 && (
                      <Crown className="text-hive-gold h-6 w-6 animate-pulse drop-shadow-[0_0_8px_rgba(212,168,83,0.6)]" />
                    )}
                    {user.rank === 2 && <Medal className="h-6 w-6 text-slate-300" />}
                    {user.rank === 3 && <Medal className="h-6 w-6 text-amber-700" />}
                    {user.rank > 3 && (
                      <span className="font-mono font-bold text-slate-600">#{user.rank}</span>
                    )}
                  </div>

                  <div className="col-span-6 flex items-center space-x-4 md:col-span-5">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className={`h-10 w-10 rounded-full border-2 bg-[#1a1a24] ${user.rank === 1 ? 'border-hive-gold' : 'border-white/10'} `}
                      />

                      {user.rank === 1 && (
                        <div className="bg-hive-gold absolute -top-1 -right-1 rounded-full border border-[#0a0a12] p-0.5">
                          <Sparkles size={8} className="text-[#08080c]" />
                        </div>
                      )}
                    </div>
                    <span
                      className={`font-bold transition-colors ${user.rank === 1 ? 'text-hive-gold' : 'text-slate-200 group-hover:text-white'}`}
                    >
                      {user.name}
                    </span>
                  </div>

                  <div className="col-span-2 text-right font-mono font-medium text-slate-500 transition-colors group-hover:text-slate-300 md:col-span-3">
                    {user.tasks}
                  </div>

                  <div className="col-span-2 flex items-center justify-end space-x-2 text-right font-mono font-bold text-white md:col-span-3">
                    <span className="text-hive-gold drop-shadow-[0_0_5px_rgba(212,168,83,0.3)]">
                      {user.earned}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="hover:text-hive-gold group inline-flex items-center text-sm font-bold text-slate-500 transition-colors"
          >
            View Full Leaderboard
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
