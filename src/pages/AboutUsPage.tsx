import { ReactNode } from 'react';
import { Container } from '../components';
import { PageContainer } from '../components/Layout';
import clubConfig from '../data/clubConfig.json';

export const AboutUsPage = () => {
  return (
    <PageContainer>
      <Section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">Mission</h2>
        <p className="text-gray-600 dark:text-gray-300">{clubConfig.main.aboutUS.mission}</p>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">What We Do</h2>
        <ul className="space-y-8">
          {clubConfig.main.aboutUS.activities.map((activity) => (
            <li key={activity.id} className="text-gray-600 dark:text-gray-300">
              <p className="text-gray-700 dark:text-white font-bold inline-block">{activity.title}</p>:{' '}
              {activity.description}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300">Phone: {clubConfig.main.phone}</p>
        <p className="text-gray-600 dark:text-gray-300">Email: {clubConfig.main.email}</p>
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
      <div className="md:w-2/3 lg:w-1/2 space-y-8">{children}</div>
    </Container>
  );
};
