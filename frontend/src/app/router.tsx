import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { FernandaPage } from '../pages/FernandaPage';
import { GlauberPage } from '../pages/GlauberPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dra-fernanda-almeida',
        element: <FernandaPage />,
      },
      {
        path: 'dr-glauber-marinho',
        element: <GlauberPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
