import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  ListChecks,
  Users,
  Coins,
  TrendingUp,
  RefreshCw } from
'lucide-react';
export function FlywheelSection() {
  const nodes = [
  {
    label: 'Projects',
    color: '#a78bfa',
    icon: Rocket
  },
  {
    label: 'Tasks',
    color: '#d4a853',
    icon: ListChecks
  },
  {
    label: 'People',
    color: '#a78bfa',
    icon: Users
  },
  {
    label: 'Rewards',
    color: '#d4a853',
    icon: Coins
  },
  {
    label: 'Growth',
    color: '#a78bfa',
    icon: TrendingUp
  },
  {
    label: 'More Projects',
    color: '#d4a853',
    icon: RefreshCw
  }];

  return (
    <section className="py-32 bg-[#08080c] overflow-hidden relative">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The HiveWork{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-gold to-hive-gold-light">
              Flywheel
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A self-reinforcing ecosystem where every contribution creates more
            value for the community.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[600px]">
          {/* Rotating Container */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">

            {/* Center Hub with Pulsing Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#111118] rounded-full border border-white/10 flex items-center justify-center z-20 animate-pulse-glow">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hive-gold/10 to-hive-purple/10 blur-md" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-3xl font-bold text-white tracking-widest">
                  HIVE
                </span>
                <span className="text-xs text-hive-gold uppercase tracking-wider mt-1">
                  Ecosystem
                </span>
              </div>
            </div>

            {/* Connecting Circle with SVG Animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5">
              {/* Orbiting Particles */}
              {[0, 120, 240].map((deg, i) =>
              <motion.div
                key={i}
                className="absolute top-0 left-1/2 w-2 h-2 bg-hive-gold rounded-full shadow-[0_0_10px_#d4a853]"
                style={{
                  marginLeft: '-4px',
                  marginTop: '-4px',
                  transformOrigin: '50% 200px' // Half of w-[400px]
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 2
                }} />

              )}
            </div>

            {/* Nodes */}
            {nodes.map((node, index) => {
              const radiusMd = 200; // Distance from center (desktop)
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 flex flex-col items-center justify-center z-30"
                  style={{
                    transform: `rotate(${index * 60}deg) translate(${radiusMd}px) rotate(-${index * 60}deg)`
                  }}>

                  <motion.div
                    className="w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mb-3 bg-[#111118] border border-white/10 backdrop-blur-xl relative overflow-hidden group"
                    style={{
                      borderColor:
                      node.color === '#d4a853' ?
                      'rgba(212,168,83,0.3)' :
                      'rgba(167,139,250,0.3)',
                      boxShadow:
                      node.color === '#d4a853' ?
                      '0 0 20px rgba(212,168,83,0.1)' :
                      '0 0 20px rgba(167,139,250,0.1)'
                    }}
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: node.color
                    }}>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <node.icon
                      size={32}
                      color={node.color}
                      className="relative z-10 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" />

                  </motion.div>
                  <motion.span
                    className="font-bold text-sm text-slate-200 bg-[#111118]/90 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: 'linear'
                    }}>

                    {node.label}
                  </motion.span>

                  {/* Connecting Line to Center (Visual only) */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-[140px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 origin-left"
                    style={{
                      transform: `rotate(${index * 60 + 180}deg)`,
                      marginLeft: '-70px'
                    }}
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: 'linear'
                    }} />

                </div>);

            })}
          </motion.div>
        </div>
      </div>
    </section>);

}