import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import CarFormPage from 'pages/car-form-page';
import HomePage from '../pages/index';
import routes from './routes';
import SingleCarPage from '../pages/single-car-page/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,

      },
      {
        path: routes.SingleCarPage.path,
        element: <SingleCarPage />,

      },
      {
        path: routes.CarFormPage,
        element: <CarFormPage />,
      },
    ],
  },

]);

export default router;
