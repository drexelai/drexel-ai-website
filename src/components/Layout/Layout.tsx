import { Footer } from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
