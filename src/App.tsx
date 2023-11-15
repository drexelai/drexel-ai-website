import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootRouter } from './routers';

const router = createBrowserRouter([{ path: '*', Component: RootRouter }], {
  basename: '/drexel-ai-website/',
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
