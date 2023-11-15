import { useState } from 'react';
import { Container } from '../Container';
import { Link, NavLink } from 'react-router-dom';

export const navbarRoutes = [
  { path: '/', title: 'Home' },
  { path: 'projects', title: 'Projects' },
  { path: 'research', title: 'Research' },
  { path: 'team', title: 'Team' },
  { path: 'about', title: 'About Us' },
];

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);
  const closeNavbar = () => setIsNavbarOpen(false);

  return (
    <header>
      <nav className="z-10 w-full absolute">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Link to="/" aria-label="logo" className="flex space-x-2 items-center">
                <img src="/images/logo.png" className="h-[32px] w-[32px] rounded-full" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Drexel AI</span>
              </Link>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  onClick={toggleNavbar}
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className={`${
                isNavbarOpen ? 'origin-top scale-y-100' : 'origin-bottom scale-y-0'
              } fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden dark:bg-gray-900/70`}
            ></div>
            <div
              className={`${
                isNavbarOpen ? 'lg:translate-y-0 scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
              } flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full translate-y-1  absolute top-full left-0 transition-all duration-300 origin-top 
                lg:relative lg:scale-100 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700`}
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  {navbarRoutes.map(({ path, title }) => (
                    <NavLink
                      to={path}
                      onClick={closeNavbar}
                      className={({ isActive }) =>
                        `${isActive && 'text-primary'} block md:px-4 transition hover:text-primary`
                      }
                    >
                      {title}
                    </NavLink>
                  ))}
                </ul>
              </div>
              <div className="mt-12 lg:mt-0">
                <a
                  href="/get-involved"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-black">Get Involved</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
