import React from 'react';
import { Hexagon, Twitter, Github, MessageCircle } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#050508] text-white pt-24 pb-12 border-t border-white/[0.03] relative">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#08080c] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
              <div className="bg-hive-gold text-[#08080c] p-1.5 rounded-lg shadow-glow-gold group-hover:rotate-12 transition-transform duration-300">
                <Hexagon size={24} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-hive-gold transition-colors">
                HiveWork
              </span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
              The collaborative platform where communities build, earn, and grow
              together. Join the revolution of decentralized work.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Github, MessageCircle].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="bg-white/[0.03] p-3 rounded-full hover:bg-hive-gold hover:text-[#08080c] transition-all duration-300 hover:scale-110 border border-white/[0.05]">

                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <span className="w-1 h-4 bg-hive-gold rounded-full mr-2"></span>
              Platform
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Browse Projects', 'Find Tasks', 'Rewards', 'Leaderboard'].map(
                (item) =>
                <li key={item}>
                    <a
                    href="#"
                    className="hover:text-hive-gold transition-colors flex items-center group">

                      <span className="w-0 group-hover:w-2 h-[1px] bg-hive-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>

              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <span className="w-1 h-4 bg-hive-purple rounded-full mr-2"></span>
              Community
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Governance', 'Discord', 'Forum', 'Events'].map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="hover:text-hive-purple transition-colors flex items-center group">

                    <span className="w-0 group-hover:w-2 h-[1px] bg-hive-purple mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Documentation', 'Blog', 'FAQ', 'Brand Assets'].map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center group">

                    <span className="w-0 group-hover:w-2 h-[1px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="relative h-[1px] w-full bg-white/[0.05] mb-8 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-hive-gold/50 to-transparent animate-[shimmer_3s_infinite]" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} HiveWork DAO. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 flex items-center">
            Built with{' '}
            <span className="text-hive-gold mx-1 animate-pulse">♥</span> by the
            Hive 🐝
          </p>
        </div>
      </div>
    </footer>);

}