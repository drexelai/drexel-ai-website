import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage, ProjectsPage } from '../pages';
import { Layout } from '../components/Layout';
import { useEffect } from 'react';

export const RootRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
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
      </Route>
    </Routes>
  );
};
