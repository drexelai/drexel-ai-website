import { Container } from '../components';
import { PageContainer } from '../components/Layout';


export const Research = () => {
  return (
    <PageContainer>
      <div id="projects">
        <Container>
          <div className="space-y-8">
            <div className="mt-8 space-y-2 text-center">
             <h1 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>Publications:</h1>
             <ul>
              <li className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">RadgenNets</li>
              <li className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">GAN Lit Review</li>
             </ul>
            </div>
          </div>
        </Container>
      </div>
    </PageContainer>
  );
};
