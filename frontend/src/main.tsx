import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import FighterAnalytics from './components/FighterAnalytics.tsx';
import FightersPage from './components/FightersPage.tsx';
import Layout from './components/Layout.tsx';
import SimulationPage from './components/SimulationPage.tsx';
import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/fighters',
        element: <FightersPage />,
      },
      {
        path: '/simulation',
        element: <SimulationPage />,
      },
      {
        path: '/fighters/:id',
        element: <FighterAnalytics />,
      }
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
