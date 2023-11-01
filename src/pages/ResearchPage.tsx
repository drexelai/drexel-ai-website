import { Container } from '../components';
import { PageContainer } from '../components/Layout';
import { ResearchList } from '../components/Research/ResearchList';
import clubConfig from '../data/clubConfig.json';

const researches = clubConfig.portfolio.research;

export const ResearchPage = () => {
  return (
    <PageContainer>
      <div id="projects">
        <Container>
          <div className="space-y-8">
            <div className="mt-8 space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Publications</h2>
              <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Learn about research that we did in the past
              </p>
            </div>
            <ResearchList researches={researches} />
          </div>
        </Container>
      </div>
    </PageContainer>
  );
};
