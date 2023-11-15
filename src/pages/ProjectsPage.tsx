import { Container } from '../components';
import { PageContainer } from '../components/Layout';
import { ProjectList } from '../components/Project';
import clubConfig from '../data/clubConfig.json';

const projects = clubConfig.portfolio.projects;

export const ProjectsPage = () => {
  return (
    <PageContainer>
      <div id="projects">
        <Container>
          <div className="space-y-8">
            <div className="mt-8 space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Projects</h2>
              <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Learn about our past software projects
              </p>
            </div>
            <ProjectList projects={projects} />
          </div>
        </Container>
      </div>
    </PageContainer>
  );
};
