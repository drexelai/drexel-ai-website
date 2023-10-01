import { useState } from 'react';
import { Container } from '../Container';

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
              <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Astrolus</span>
              </a>

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
                  <li>
                    <a href="#features" className="block md:px-4 transition hover:text-primary" onClick={closeNavbar}>
                      <span>Features</span>
                    </a>
                  </li>
                  <li>
                    <a href="#solution" className="block md:px-4 transition hover:text-primary" onClick={closeNavbar}>
                      <span>Solution</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="block md:px-4 transition hover:text-primary"
                      onClick={closeNavbar}
                    >
                      <span>Testimonials</span>
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="block md:px-4 transition hover:text-primary" onClick={closeNavbar}>
                      <span>Blog</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="#"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
