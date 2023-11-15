import { Container } from './Container';
import clubConfig from '../data/clubConfig.json';

const activities = clubConfig.main.aboutUS.activities.slice(0, 3);

export const Activities = () => {
  return (
    <div id="activities">
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          
        </div>
        <div className="flex flex-col items-center">
            <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">Our Organization</h2>
            <p className="text-gray-600 dark:text-gray-300">{clubConfig.main.aboutUS.last}</p>
            <br/><br/><br/>
            <h3 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">What We Do</h3>
          </div>
        
          
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group relative h-full bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <div className="h-full flex flex-col justify-end relative space-y-8 py-12 p-8">
                <img
                  src={`images/activities/${activity.id}.svg`}
                  className="flex-initial w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h5 className="flex-1 text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  {activity.title}
                </h5>
              </div>
            </div>
          ))}
          <div className="group relative h-full bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="h-full flex flex-col justify-end relative space-y-8 py-12 p-8">
              <img
                src="images/activities/other.svg"
                className="flex-initial w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <h5 className="flex-1 text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Professional Development
              </h5>
              {/* <a
                href={`/about#activities`}
                className="flex-initial flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
