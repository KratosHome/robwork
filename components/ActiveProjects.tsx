import React from 'react';

import { motion } from 'framer-motion';

import { ProjectCard } from './ProjectCard';

const projects = [
  {
    name: 'DeFi Dashboard',
    description:
      'A comprehensive dashboard for tracking yield farming positions across multiple chains.',
    avatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    ],

    taskCount: 12,
    rewardPool: '4.5 ETH',
    progress: 65,
    category: 'DeFi',
  },
  {
    name: 'NFT Marketplace',
    description: 'Building a community-owned marketplace for generative art with low gas fees.',
    avatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=6',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=7',
    ],

    taskCount: 8,
    rewardPool: '2,500 MATIC',
    progress: 40,
    category: 'NFT',
  },
  {
    name: 'DAO Governance Tool',
    description: 'Voting interface for off-chain signaling and on-chain execution.',
    avatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=8',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=9',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=10',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=11',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=12',
    ],

    taskCount: 24,
    rewardPool: '15,000 USDC',
    progress: 85,
    category: 'Governance',
  },
  {
    name: 'Cross-chain Bridge UI',
    description: 'User-friendly frontend for the Wormhole protocol integration.',
    avatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=13',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=14',
    ],

    taskCount: 5,
    rewardPool: '1.2 BTC',
    progress: 20,
    category: 'Infrastructure',
  },
  {
    name: 'Token Analytics Platform',
    description: 'Real-time charting and volume analysis for new token launches.',
    avatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=15',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=16',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=17',
    ],

    taskCount: 18,
    rewardPool: '8,000 DAI',
    progress: 55,
    category: 'Analytics',
  },
  {
    name: 'Community Wiki',
    description: 'Decentralized knowledge base for the HiveWork ecosystem.',
    avatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=18',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=19',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=20',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=21',
    ],

    taskCount: 30,
    rewardPool: '500 HIVE',
    progress: 90,
    category: 'Community',
  },
];

export function ActiveProjects() {
  return (
    <section className="bg-[#08080c] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-end justify-between md:flex-row">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Join Active Projects</h2>
            <p className="max-w-2xl text-lg text-slate-400">
              Find a project that matches your skills and start earning rewards today.
            </p>
          </div>
          <a
            href="#"
            className="text-hive-gold hover:text-hive-gold-light mt-4 hidden font-bold transition-colors md:mt-0 md:block"
          >
            View All Projects &rarr;
          </a>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
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
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="#"
            className="text-hive-gold hover:text-hive-gold-light font-bold transition-colors"
          >
            View All Projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
