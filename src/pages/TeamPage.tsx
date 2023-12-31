import { PageContainer } from '../components/Layout';
import { MembersList, Container } from '../components';
import clubConfig from '../data/clubConfig.json';

export const TeamPage = () => {
  return (
    <PageContainer>
      <div id="members">
        <Container>
          <div className="space-y-8">
            <div className="mt-8 space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">E-Board</h2>
              <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">Meet our executive board</p>
            </div>
            <MembersList members={clubConfig.team.skills} />
          </div>
        </Container>
      </div>
      {/* <div id="ambassadors">
        <Container>
          <div className="space-y-8">
            <div className="mt-8 space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Advisor</h2>
              <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300"></p>
            </div>
            <MembersList members={clubConfig.team.ambassadors} />
          </div>
        </Container>
      </div> */}
    </PageContainer>
  );
};
