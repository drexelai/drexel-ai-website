import { Container } from './Container';
import clubConfig from '../data/clubConfig.json';
import { PillButton } from './common';

export const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-20 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              The Drexel Society
            </h1>
            <h1 className="text-gray-900 dark:text-secondary font-bold text-5xl md:text-6xl xl:text-7xl">
              <span> of Artificial Intelligence</span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">{clubConfig.main.description}</p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <PillButton primaryColor><a href="https://dragonlink.drexel.edu/organization/drexelai">Join Us</a></PillButton>
              {/* <PillButton><a href="/about">Learn More</a></PillButton> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
