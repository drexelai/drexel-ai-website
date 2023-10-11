import { Activities, HeroSection } from '../components';
import { RecentProjects } from '../components/Project';

export const HomePage = () => {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <Activities />
      <RecentProjects />
    </main>
  );
};
