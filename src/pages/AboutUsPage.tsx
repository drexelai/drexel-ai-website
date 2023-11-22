import { ReactNode } from 'react';
import { Container } from '../components';
import { PageContainer } from '../components/Layout';
import clubConfig from '../data/clubConfig.json';

export const AboutUsPage = () => {
  return (
    <PageContainer>
      <Section>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">Mission</h2>
          <br/>
          <p className="text-gray-600 dark:text-gray-300 text-md lg:text-lg">{clubConfig.main.aboutUS.mission}</p>

      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl pb-8">What We Do</h2>
        <br/>
        <ul className="space-y-8">
          {clubConfig.main.aboutUS.activities.map((activity) => (
            <li key={activity.id} className="text-gray-600 dark:text-gray-300 text-md lg:text-lg">
              <p className="text-gray-700 dark:text-white font-bold inline-block">{activity.title}</p>:{' '}
              {activity.description}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">Contact Us</h2>
        <br/>
        {/* <p className="text-gray-600 dark:text-gray-300">Phone: {clubConfig.main.phone}</p> */}
        <p className="text-gray-600 dark:text-gray-300"><a href="https://dragonlink.drexel.edu/organization/drexelai">az548@drexel.edu</a></p>
      </Section>
    </PageContainer>
  );
};

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <Container>
      <div className="flex flex-col items-center">{children}</div>
    </Container>
  );
};
