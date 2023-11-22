import { RouterProvider, createHashRouter } from 'react-router-dom';
import { RootRouter } from './routers';

const router = createHashRouter([
  { path: '/*', Component: RootRouter }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
