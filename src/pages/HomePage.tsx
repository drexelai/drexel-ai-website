import { Blog, CallToAction, Features, HeroSection, Stats, Testimonials } from '../components';

export const HomePage = () => {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
  );
};
