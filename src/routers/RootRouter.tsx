import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';
import { Layout } from '../components/Layout';

export const RootRouter = () => {
  return (
    <Routes>
      <Route id="layout" path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
