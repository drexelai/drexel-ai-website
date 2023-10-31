import { Route, Routes, useLocation } from 'react-router-dom';
import { AboutUsPage, HomePage, ProjectsPage, TeamPage } from '../pages';
import { Layout } from '../components/Layout';
import { useLayoutEffect } from 'react';

export const RootRouter = () => {
  const { pathname } = useLocation();

  // scroll to top when page changes
  useLayoutEffect(() => {
    document.documentElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <Routes>
      <Route id="layout" path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<></>} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
};
