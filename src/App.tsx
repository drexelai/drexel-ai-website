import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootRouter } from './routers';

const router = createBrowserRouter([{ path: '*', Component: RootRouter }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
