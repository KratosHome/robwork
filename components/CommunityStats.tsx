import { Activity, Briefcase, CheckCircle, Coins, Globe, Users } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

import { useInView } from 'framer-motion';

function Counter({
  from,
  to,
  duration = 2,
  prefix = '',
  suffix = '',
}: {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, {
    once: true,
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const element = nodeRef.current;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(from + (to - from) * easeOutQuart);
      if (element) {
        const formatted = current.toLocaleString();
        element.textContent = `${prefix}${formatted}${suffix}`;
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration, prefix, suffix]);
  return (
    <span
      ref={nodeRef}
      className="mb-2 block text-4xl font-extrabold tracking-tight text-white md:text-5xl"
    >
      0
    </span>
  );
}
export function CommunityStats() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.03] bg-[#0a0a12] py-24">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.05),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="mb-2 text-3xl font-bold text-white">Platform Metrics</h2>
          <p className="text-slate-400">Real-time growth statistics from the Hive.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Main Stat - Large Card */}
          <div className="group hover:border-hive-gold/20 relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111118] p-8 transition-colors md:col-span-2">
            <div className="bg-hive-gold/5 group-hover:bg-hive-gold/10 absolute top-0 right-0 -mt-16 -mr-16 rounded-full p-32 blur-3xl transition-all" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center space-x-3">
                <div className="bg-hive-gold/10 border-hive-gold/20 rounded-xl border p-3">
                  <Users className="text-hive-gold h-6 w-6" />
                </div>
                <span className="text-sm font-medium tracking-wider text-slate-400 uppercase">
                  Active Contributors
                </span>
              </div>
              <Counter from={0} to={2847} />
              <div className="mt-6 flex items-center text-sm font-medium text-green-400">
                <Activity className="mr-1 h-4 w-4" />
                <span>+12% this week</span>
              </div>
              <div className="mt-8 flex h-16 w-full items-end space-x-1 overflow-hidden rounded-xl bg-white/[0.03] px-1">
                {[40, 60, 45, 70, 50, 80, 65, 85, 75, 90, 60, 95].map((h, i) => (
                  <div
                    key={i}
                    className="bg-hive-gold/20 hover:bg-hive-gold flex-1 rounded-t-sm transition-colors"
                    style={{
                      height: `${h}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Stats - Vertical Stack */}
          <div className="space-y-6 md:col-span-1">
            <div className="group hover:border-hive-purple/30 relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111118] p-6 transition-colors">
              <div className="bg-hive-purple/5 absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full blur-2xl" />
              <div className="mb-4 flex items-center justify-between">
                <div className="bg-hive-purple/10 border-hive-purple/20 rounded-xl border p-2.5">
                  <Briefcase className="text-hive-purple h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-slate-500">TOTAL</span>
              </div>
              <div>
                <Counter from={0} to={156} />
                <span className="text-sm font-medium text-slate-400">Projects Launched</span>
              </div>
            </div>

            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111118] p-6 transition-colors hover:border-blue-500/30">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl" />
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-2.5">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <span className="font-mono text-xs text-slate-500">COMPLETED</span>
              </div>
              <div>
                <Counter from={0} to={12493} />
                <span className="text-sm font-medium text-slate-400">Tasks Finished</span>
              </div>
            </div>
          </div>

          {/* Tertiary Stat - Tall Card */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111118] p-6 transition-colors hover:border-green-500/30 md:col-span-1">
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-green-500/5 to-transparent" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center space-x-3">
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3">
                  <Coins className="h-6 w-6 text-green-400" />
                </div>
                <span className="text-sm font-medium tracking-wider text-slate-400 uppercase">
                  Rewards
                </span>
              </div>

              <div className="mb-2">
                <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  $1.2M
                </span>
              </div>
              <span className="text-sm text-slate-400">Distributed to community</span>

              <div className="relative mx-auto mt-12 h-32 w-32">
                <div className="absolute inset-0 rounded-full border-4 border-white/5" />
                <div className="absolute inset-0 rotate-45 rounded-full border-4 border-green-500/30 border-t-transparent border-l-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-slate-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
