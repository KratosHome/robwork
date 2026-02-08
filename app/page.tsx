'use client';

import { ActiveProjects } from '@/components/ActiveProjects';
import { CommunityStats } from '@/components/CommunityStats';
import { FlywheelSection } from '@/components/FlywheelSection';
import { HeroSection } from '@/components/HeroSection';
import { Leaderboard } from '@/components/Leaderboard';
import { StartProjectCTA } from '@/components/StartProjectCTA';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlywheelSection />
      <ActiveProjects />
      <CommunityStats />
      <Leaderboard />
      <StartProjectCTA />
    </div>
  );
}
