import { Container } from '../Container';
import { PillButton } from '../common';
import clubConfig from '../../data/clubConfig.json';
import { ProjectList } from '.';
import { Link } from 'react-router-dom';

const recentProjects = clubConfig.portfolio.projects.sort((a, b) => b.year - a.year).slice(0, 3);

export const RecentProjects = () => {
  return (
    <div id="projects">
      <Container>
        <div className="space-y-8">
          <div className="mt-8 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Latest Projects</h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Learn about research and projects that we did in the past
            </p>
          </div>
          <ProjectList projects={recentProjects} />
          <div className="flex justify-center">
            <Link to="/projects">
              <PillButton>See All</PillButton>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
