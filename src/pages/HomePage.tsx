import { Activities, HeroSection } from '../components';
import { PageContainer } from '../components/Layout';
import { RecentProjects } from '../components/Project';

export const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <Activities />
      <RecentProjects />
    </PageContainer>
  );
};
